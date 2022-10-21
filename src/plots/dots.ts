import p5 from "p5";
import { BACKGROUND, FOREGROUND, HEIGHT, WIDTH } from "../constants";
import { getNoiseValue } from "../getNoiseValue";

const sketch = (s: any) => {
  s.setup = () => {
    s.createCanvas(WIDTH, HEIGHT);
    s.background(BACKGROUND);
    s.fill(FOREGROUND);
    s.stroke(FOREGROUND);

    for (let y = 10; y < HEIGHT; y += 20) {
      for (let x = 10; x < WIDTH; x += 20) {
        const size = getNoiseValue(x, y) * 10 + 10;
        s.ellipse(x, y, size, size);
      }
    }
  };

  s.draw = () => {};
};

export const initDots = (): p5 => {
  return new p5(sketch);
};
