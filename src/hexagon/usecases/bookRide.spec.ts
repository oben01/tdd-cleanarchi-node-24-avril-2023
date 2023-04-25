import { bookRide } from './bookRide';
import { BookRideCommand } from './bookRideCommand';
import { InMemoryBookingRepositoryStub } from '../../adapters/secondary/gateways/repositories/inMemoryBookingRepositoryStub';
import { staticClock } from '../../adapters/secondary/gateways/clock-handling/staticClock';
import { Booking } from '../models/booking';

describe('Ride booking', () => {
  const parisAddress = '3 rue de Courcelles Paris';
  const outsideAddress = '11 avenue Hugo Aubervilliers';
  let bookingRepository: InMemoryBookingRepositoryStub;
  const fakeNow = new Date(2020, 3, 3, 4, 1, 2);
  const clock = staticClock(fakeNow);

  beforeEach(() => {
    bookingRepository = new InMemoryBookingRepositoryStub();
    bookingRepository.nextId = '123abc';
  });

  it.each`
    departure         | arrival           | expectedPrice
    ${outsideAddress} | ${parisAddress}   | ${0}
    ${parisAddress}   | ${outsideAddress} | ${30}
    ${parisAddress}   | ${parisAddress}   | ${10}
    ${outsideAddress} | ${outsideAddress} | ${50}
  `(
    'should book a ride from $departure to $arrival ' +
      'at $expectedPrice according the trip',
    async ({ departure, arrival, expectedPrice }) => {
      await bookARide({ userId: '888aaa', departure, arrival });
      expectBookings({
        id: bookingRepository.nextId,
        userId: '888aaa',
        departure,
        arrival,
        price: expectedPrice,
        bookedAt: fakeNow,
        status: 'PENDING',
      });
    },
  );

  describe('A booking exists in pending status', () => {
    const myBooking: Omit<Booking, 'id'> = {
      userId: '888aaa',
      departure: outsideAddress,
      arrival: parisAddress,
      price: 0,
      bookedAt: new Date(2005, 3, 4),
      status: 'PENDING',
    };

    it('it is mine, I cannot book another one', async () => {
      const firstBooking: Booking = {
        ...myBooking,
        id: '456def',
      };
      await bookingRepository.save(firstBooking);
      await bookARide({
        userId: '888aaa',
        departure: outsideAddress,
        arrival: parisAddress,
      });
      expectBookings(firstBooking);
    });

    it('it is yours, I can book another one', async () => {
      const yourBooking: Booking = {
        ...myBooking,
        id: '456def',
        userId: '666aaa',
      };
      await bookingRepository.save(yourBooking);
      await bookARide({
        userId: '888aaa',
        departure: outsideAddress,
        arrival: parisAddress,
      });
      expectBookings(yourBooking, {
        ...myBooking,
        id: bookingRepository.nextId,
        bookedAt: fakeNow,
      });
    });
  });

  const bookARide = (bookRideCommand: BookRideCommand) => {
    bookRide(bookingRepository, clock)(bookRideCommand);
  };

  const expectBookings = (...expectedBookings: Booking[]) =>
    expect(bookingRepository.bookings).toEqual(expectedBookings);
});
