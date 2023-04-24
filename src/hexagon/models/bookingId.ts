import { uuid as v4 } from 'uuid';
export class BookingId {
  constructor(private _id: string) {}

  static create() {
    return new BookingId(v4());
  }

  get id(): string {
    return this._id;
  }
}
