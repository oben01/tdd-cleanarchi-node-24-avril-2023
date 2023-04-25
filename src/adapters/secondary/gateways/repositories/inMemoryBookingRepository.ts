import { BookingRepository } from '../../../../hexagon/gateways/repositories/bookingRepository';
import { Booking } from '../../../../hexagon/models/booking';
import { v4 as uuidV4 } from 'uuid';

export class InMemoryBookingRepository implements BookingRepository {
  private _bookings: Booking[] = [];
  async save(booking: Booking): Promise<void> {
    this._bookings.push(booking);
  }

  nextIdentity(): string {
    return uuidV4();
  }
  get bookings(): Booking[] {
    return this._bookings;
  }

  hasAnyPendingBooking(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
