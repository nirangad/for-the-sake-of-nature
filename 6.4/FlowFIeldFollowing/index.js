let color1, color2, color3, color4;

let canvas, canvasSize;

function setup() {
  color1 = "#edddd4";
  color2 = "#c44536";
  color3 = "#197278";
  color4 = "#283d3b";

  canvasSize = { width: 800, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);
}

function draw() {
  background(color1);
}

function mouseMoved() {}
