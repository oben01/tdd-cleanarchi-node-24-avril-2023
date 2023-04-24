import { BookingRepository } from '../gateways/repositories/bookingRepository';
import { BookRideCommand } from './bookRideCommand';
import { ridePricer } from '../models/ridePricer';
import { Clock } from '../gateways/clock-handling/clock';

export const bookRide =
  (bookingRepository: BookingRepository, clock: Clock) =>
  async (bookRideCommand: BookRideCommand) => {
    const { departure, arrival } = bookRideCommand;
    const price = ridePricer(departure, arrival);
    await bookingRepository.save({
      id: '123abc',
      departure,
      arrival,
      price,
      bookedAt: clock.now(),
    });
  };
