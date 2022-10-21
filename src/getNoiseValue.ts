import tumult from "tumult";

const SEED = "42";
const MAP_FACTOR = 256;

const simplex2 = new tumult.Perlin2(SEED);

/**
  Tar inn 2D-koordinater, og returnerer en verdi mellom -1 og 1.
*/
export const getNoiseValue = (x: number, y: number): number => {
  return simplex2.octavate(1, x / MAP_FACTOR, y / MAP_FACTOR);
};
