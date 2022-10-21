import tumult from "tumult";

const SEED = "42";

const simplex2 = new tumult.Simplex2(SEED);
export const getNoiseValue = (x: number, y: number): number => {
  return simplex2.octavate(4, x, y);
};
