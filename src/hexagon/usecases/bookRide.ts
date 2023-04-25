import { BookingRepository } from '../gateways/repositories/bookingRepository';
import { BookRideCommand } from './bookRideCommand';
import { ridePricer } from '../models/ridePricer';
import { Clock } from '../gateways/clock-handling/clock';

export const bookRide =
  (bookingRepository: BookingRepository, clock: Clock) =>
  async (bookRideCommand: BookRideCommand) => {
    const { userId, departure, arrival } = bookRideCommand;
    const price = ridePricer(departure, arrival);
    if (await bookingRepository.hasAnyPendingBooking(userId)) return;
    await bookingRepository.save({
      id: bookingRepository.nextIdentity(),
      userId: '888aaa',
      departure,
      arrival,
      price,
      bookedAt: clock.now(),
      status: 'PENDING',
    });
  };
