import { Booking } from '../../models/booking';

export interface BookingRepository {
  save(booking: Booking): Promise<void>;

  nextIdentity(): string;
}
