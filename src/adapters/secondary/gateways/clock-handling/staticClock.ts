import { Clock } from '../../../../hexagon/gateways/clock-handling/clock';

export const staticClock = (dateNow: Date): Clock => ({
  now: () => dateNow,
});
