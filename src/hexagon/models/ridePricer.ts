export const ridePricer = (departure: string, arrival: string): number => {
  if (departureInParis(departure)) {
    if (arrivalInParis(arrival)) return 10;
    return 30;
  }
  if (arrivalOutside(arrival)) return 50;
  return 0;
};

const departureInParis = (departure: string) => isAddressInParis(departure);
const arrivalInParis = (arrival: string) => isAddressInParis(arrival);
const arrivalOutside = (arrival: string) => !arrivalInParis(arrival);
const isAddressInParis = (address: string) => address.includes('Paris');
