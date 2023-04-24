export interface BookingRepository {
  save(booking: any): Promise<void>;
}
