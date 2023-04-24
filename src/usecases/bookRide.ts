import { InMemoryBookingRepository } from './bookRide.spec';

export class BookRide {
  constructor(private bookingRepository: InMemoryBookingRepository) {}

  handle(departure: string, arrival: string) {
    let price = 0;
    if (departure.includes('Paris'))
      if (arrival.includes('Paris')) price = 10;
      else price = 30;
    this.bookingRepository.save({
      id: '123abc',
      departure,
      arrival,
      price,
    });
  }
}
