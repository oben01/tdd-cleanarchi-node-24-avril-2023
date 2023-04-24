import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Booking } from '../../../../hexagon/models/booking';
import { BookRideCommand } from '../../../../hexagon/usecases/bookRideCommand';
import { BookingParams } from './bookingParams';
import { InMemoryBookingRepository } from '../../../secondary/gateways/repositories/inMemoryBookingRepository';

@Controller()
export class BookingController {
  constructor(
    @Inject('bookRide')
    private bookRide: (bookRideCommand: BookRideCommand) => Promise<void>,
    @Inject('BookingRepository')
    private bookingRepository: InMemoryBookingRepository,
  ) {}
  @Post('/bookings')
  async bookARide(@Body() bookingParams: BookingParams): Promise<Booking[]> {
    const { departure, arrival } = bookingParams;
    console.log(bookingParams);
    await this.bookRide({
      departure,
      arrival,
    });
    return this.bookingRepository.bookings;
  }
}
