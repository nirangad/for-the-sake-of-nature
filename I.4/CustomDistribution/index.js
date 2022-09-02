let r1, r2;
let color1, color2;
let minH, maxH;
let minY, maxY;
let canvasSize;

function setup() {
  color1 = "#4E6766";
  color2 = "#F7DD7222";
  canvasSize = 500;

  createCanvas(canvasSize, canvasSize);
  background(color1);
  minH = 10;
  maxH = 100;
  minY = f(minH);
  maxY = f(maxH);
  r1 = 0;
  r2 = 0;
}

function draw() {
  stroke(color2);

  r1 = random(minH, maxH);
  r2 = random(minH, maxH);

  if (r2 * 2 < r1) {
    line(
      normalize(r1, minH, maxH),
      canvasSize - normalize(f(r1), minY, maxY),
      normalize(r1, minH, maxH),
      canvasSize
    );
  }
}

function normalize(val, minVal, maxVal) {
  return (val * canvasSize) / (maxVal - minVal);
}

function f(x) {
  return x * x + minH;
}
