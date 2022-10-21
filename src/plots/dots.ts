import p5 from "p5";
import { BACKGROUND, FOREGROUND, HEIGHT, WIDTH } from "../constants";

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
        const size = s.noise(x, y) * 20;
        s.ellipse(x, y, size, size);
      }
    }
  };
};

export const initDots = () => {
  const sketchInstance = new p5(sketch);
};
