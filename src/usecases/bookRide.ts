import { InMemoryBookingRepository } from './bookRide.spec';
import { BookingRepository } from './bookingRepository';

export class BookRide {
  constructor(private bookingRepository: BookingRepository) {}

  async handle(departure: string, arrival: string): Promise<void> {
    let price = 0;
    if (departure.includes('Paris'))
      if (arrival.includes('Paris')) price = 10;
      else price = 30;
    else if (!arrival.includes('Paris')) price = 50;
    await this.bookingRepository.save({
      id: '123abc',
      departure,
      arrival,
      price,
    });
  }
}
