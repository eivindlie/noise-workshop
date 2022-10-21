import p5 from "p5";
import { BACKGROUND, HEIGHT, WIDTH } from "../constants";
import { getNoiseValue } from "../getNoiseValue";

const RECT_SIZE = 2;

const sketch = (s: any) => {
  s.setup = () => {
    s.createCanvas(WIDTH, HEIGHT);
    s.background(BACKGROUND);
    s.noStroke();

    for (let y = 0; y < HEIGHT; y += RECT_SIZE) {
      for (let x = 0; x < WIDTH; x += RECT_SIZE) {
        const intensity = getNoiseValue(x, y) * 128 + 127;
        s.fill(intensity);
        s.rect(x, y, RECT_SIZE, RECT_SIZE);
      }
    }
  };

  s.draw = () => {};
};

export const initPixels = (): p5 => {
  return new p5(sketch);
};
