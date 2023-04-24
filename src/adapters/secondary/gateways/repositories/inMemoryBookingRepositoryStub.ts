import { BookingRepository } from '../../../../hexagon/gateways/repositories/bookingRepository';
import { Booking } from '../../../../hexagon/models/booking';

export class InMemoryBookingRepositoryStub implements BookingRepository {
  private _bookings: Booking[] = [];
  private _nextId: string;

  get bookings(): Booking[] {
    return this._bookings;
  }

  async save(booking: Booking): Promise<void> {
    this._bookings.push(booking);
  }

  nextIdentity(): string {
    return this._nextId;
  }

  set nextId(value: string) {
    this._nextId = value;
  }

  get nextId(): string {
    return this._nextId;
  }
}
