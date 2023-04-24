import { bookRide } from './bookRide';
import { BookRideCommand } from './bookRideCommand';
import { InMemoryBookingRepository } from '../../adapters/secondary/inMemoryBookingRepository';
import { staticClock } from '../../adapters/secondary/clock-handling/staticClock';

describe('Ride booking', () => {
  const parisAddress = '3 rue de Courcelles Paris';
  const outsideAddress = '11 avenue Hugo Aubervilliers';
  let bookingRepository: InMemoryBookingRepository;
  const fakeNow = new Date(2020, 3, 3, 4, 1, 2);
  const clock = staticClock(fakeNow);

  beforeEach(() => {
    bookingRepository = new InMemoryBookingRepository();
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
        id: '123abc',
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
