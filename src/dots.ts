import p5 from "p5";

const sketch = (s: any) => {
  s.setup = () => {
    s.createCanvas(400, 400);
  };

  s.draw = () => {
    s.background(0);
    s.fill(255);

    for (let y = 5; y < 400; y += 10) {
      for (let x = 5; x < 400; x += 10) {
        const size = s.noise(x, y) * 5;
        s.ellipse(x, y, size, size);
      }
    }
  };
};

export const initDots = () => {
  const sketchInstance = new p5(sketch);
};
