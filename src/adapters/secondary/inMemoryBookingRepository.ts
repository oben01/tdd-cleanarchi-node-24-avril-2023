import { Booking } from '../../hexagon/models/booking';
import { BookingRepository } from '../../hexagon/gateways/repositories/bookingRepository';

export class InMemoryBookingRepository implements BookingRepository {
  private _bookings: Booking[] = [];

  get bookings(): Booking[] {
    return this._bookings;
  }

  async save(booking: Booking): Promise<void> {
    this._bookings.push(booking);
  }
}
