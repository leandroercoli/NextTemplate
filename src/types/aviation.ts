export type Airport = {
  icao: string;
  iata: string;
  name: string;
  city: string;
  subd: string;
  country: string;
  elevation: number;
  lat: string;
  lon: string;
  tz: string;
  lid: string;
};

export type ResultsMetadata = {
  total: number;
};
