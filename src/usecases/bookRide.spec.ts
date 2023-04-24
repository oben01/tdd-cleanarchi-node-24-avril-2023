import { BookRide } from './bookRide';

describe('Ride booking', () => {
  const parisAddress = '3 rue de Courcelles Paris';
  const outsideAddress = '11 avenue Hugo Aubervilliers';
  let bookingRepository: InMemoryBookingRepository;

  beforeEach(() => {
    bookingRepository = new InMemoryBookingRepository();
  });

  it.each`
    departure         | arrival           | expectedPrice
    ${outsideAddress} | ${parisAddress}   | ${0}
    ${parisAddress}   | ${outsideAddress} | ${30}
    ${parisAddress}   | ${parisAddress}   | ${10}
  `(
    'should book a ride from $departure to $arrival ' +
      'at $expectedPrice according the trip',
    ({ departure, arrival, expectedPrice }) => {
      bookARide(departure, arrival);
      expectBookings({
        id: '123abc',
        departure,
        arrival,
        expectedPrice,
      });
    },
  );

  const bookARide = (departure: string, arrival: string) => {
    new BookRide(bookingRepository).handle(departure, arrival);
  };

  const expectBookings = ({ id, departure, arrival, expectedPrice }) =>
    expect(bookingRepository.bookings).toEqual([
      {
        id,
        departure,
        arrival,
        price: expectedPrice,
      },
    ]);
});

export class InMemoryBookingRepository {
  private _bookings: any[] = [];

  get bookings(): any[] {
    return this._bookings;
  }

  save(booking: any) {
    this._bookings.push(booking);
  }
}
