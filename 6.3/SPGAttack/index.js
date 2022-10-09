let color1, color2, color3, color4;

let canvas, canvasSize;

function setup() {
  color1 = "#1d3461";
  color2 = "#829cbc";
  color3 = "#376996";
  color4 = "#f7b538";

  canvasSize = { width: 750, height: 800 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);
}

function draw() {
  background(color1);
}

function mouseMoved() {}
