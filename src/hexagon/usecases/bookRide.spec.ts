import { bookRide } from './bookRide';
import { BookRideCommand } from './bookRideCommand';
import { InMemoryBookingRepositoryStub } from '../../adapters/secondary/gateways/repositories/inMemoryBookingRepositoryStub';
import { staticClock } from '../../adapters/secondary/gateways/clock-handling/staticClock';

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
      await bookARide({ departure, arrival });
      expectBookings({
        id: bookingRepository.nextId,
        departure,
        arrival,
        expectedPrice,
      });
    },
  );

  const bookARide = (bookRideCommand: BookRideCommand) => {
    bookRide(bookingRepository, clock)(bookRideCommand);
  };

  const expectBookings = ({ id, departure, arrival, expectedPrice }) =>
    expect(bookingRepository.bookings).toEqual([
      {
        id,
        departure,
        arrival,
        price: expectedPrice,
        bookedAt: fakeNow,
      },
    ]);
});
