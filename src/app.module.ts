import { Module } from '@nestjs/common';
import { BookingController } from './adapters/primary/nestjs/controllers/bookingController';
import { Clock } from './hexagon/gateways/clock-handling/clock';
import { BookingRepository } from './hexagon/gateways/repositories/bookingRepository';
import { bookRide } from './hexagon/usecases/bookRide';
import { InMemoryBookingRepository } from './adapters/secondary/gateways/repositories/inMemoryBookingRepository';
import { systemClock } from './adapters/secondary/gateways/clock-handling/systemClock';

@Module({
  imports: [],
  controllers: [BookingController],
  providers: [
    {
      provide: 'bookRide',
      useFactory: (clock: Clock, bookingRepository: BookingRepository) =>
        bookRide(bookingRepository, clock),
      inject: ['Clock', 'BookingRepository'],
    },
    {
      provide: 'Clock',
      useFactory: systemClock,
    },
    {
      provide: 'BookingRepository',
      useClass: InMemoryBookingRepository,
    },
  ],
})
export class AppModule {}
