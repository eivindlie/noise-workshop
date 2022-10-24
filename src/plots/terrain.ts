import p5 from "p5";
import { BACKGROUND, FOREGROUND, HEIGHT, WIDTH } from "../constants";
import { getNoiseValue } from "../getNoiseValue";

const SCALE = 5;
const WEBGL = "webgl";
const TRIANGLE_STRIP = 5;

const normalizingFactor = Math.max(WIDTH, HEIGHT);

const sketch = (s: any) => {
  s.setup = () => {
    s.createCanvas(WIDTH, HEIGHT, WEBGL);
    s.background(BACKGROUND);
    s.fill(BACKGROUND);
    s.stroke(FOREGROUND);

    s.rotateX(0.9);
    s.translate(-WIDTH / 2, -HEIGHT / 2);

    for (let y = 0; y < HEIGHT; y += SCALE) {
      s.beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < WIDTH; x += SCALE) {
        const height =
          getNoiseValue(x / normalizingFactor, y / normalizingFactor) * 128;
        s.vertex(x, y, height);
      }
      s.endShape();
    }
  };

  s.draw = () => {};
};

export const initTerrain = (): p5 => {
  return new p5(sketch);
};
