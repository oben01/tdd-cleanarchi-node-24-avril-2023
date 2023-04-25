export interface Booking {
  id: string;
  userId: string;
  departure: string;
  arrival: string;
  price: number;
  bookedAt: Date;
  status: BookingStatus;
}

export type BookingStatus = 'PENDING';
