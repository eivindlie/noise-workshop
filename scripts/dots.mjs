import p5 from "p5";

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(800, 800);
  };

  s.draw = () => {
    background(0);
    fill(255);

    for (let y = 5; y < 400; y += 10) {
      for (let x = 5; x < 400; x += 10) {
        const size = noise(x, y) * 5;
        ellipse(x, y, size, size);
      }
    }
  };
};

export const init = () => {
  const sketchInstance = new p5(sketch);
};
