import { Clock } from '../../../../hexagon/gateways/clock-handling/clock';

export const systemClock = (): Clock => ({
  now: () => new Date(),
});
