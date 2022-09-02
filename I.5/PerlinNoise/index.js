let color1, color2, color3;
let canvasSize;
let tx, ty;

function setup() {
  color1 = "#5c946e";
  color2 = "#2A2D34";
  color3 = "#30c5ff";
  canvasSize = 500;
  tx = 0;
  ty = 0;

  createCanvas(canvasSize, canvasSize);
  background(color1);
}

function draw() {
  background(color1);
  noStroke();
  fill(color2);
  let x = noise(tx) * width;
  let y = noise(ty) * height;
  ellipse(x, y, 30, 30);
  tx += 0.01;
  ty += 0.02;

  fill(color3);
  ellipse(random(0, width), random(0, height), 30, 30);
}
