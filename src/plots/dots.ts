import p5 from "p5";
import { BACKGROUND, FOREGROUND, HEIGHT, WIDTH } from "../constants";
import { getNoiseValue } from "../getNoiseValue";

const sketch = (s: any) => {
  s.setup = () => {
    s.createCanvas(WIDTH, HEIGHT);
  };

  s.draw = () => {
    s.background(BACKGROUND);
    s.fill(FOREGROUND);
    s.stroke(FOREGROUND);

    for (let y = 10; y < HEIGHT; y += 20) {
      for (let x = 10; x < WIDTH; x += 20) {
        const size = getNoiseValue(x / WIDTH, y / HEIGHT) * 20;
        s.ellipse(x, y, size, size);
      }
    }
  };
};

export const initDots = (): p5 => {
  const sketchInstance = new p5(sketch);
  return sketchInstance;
};
