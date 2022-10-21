declare module "tumult" {
  declare class Noise {
    constructor(seed: string);
    seed(seed: string): void;
    octavate(octaves: number, x: number, y: number): number;
    gen(x: number, y: number): number;
  }

  declare class Simplex2 extends Noise {}
  declare class Perlin2 extends Noise {}
}
