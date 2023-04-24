import { BookingRepository } from '../gateways/repositories/bookingRepository';
import { BookRideCommand } from './bookRideCommand';
import { ridePricer } from '../models/ridePricer';

export const bookRide =
  (bookingRepository: BookingRepository) =>
  async (bookRideCommand: BookRideCommand) => {
    const { departure, arrival } = bookRideCommand;
    const price = ridePricer(departure, arrival);
    await bookingRepository.save({
      id: '123abc',
      departure,
      arrival,
      price,
    });
  };
