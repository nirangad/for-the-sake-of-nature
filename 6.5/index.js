let color1, color2, color3, color4;
let canvas, canvasSize;

let origin, baseVector, movingVector;

function setup() {
  color1 = "#cbbfbb";
  color2 = "#61988e";
  color3 = "#f56960";
  color4 = "#c46d5e";

  canvasSize = { width: 600, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  origin = createVector(width / 2, height / 2);
  baseVector = createVector(290, 20);
  movingVector = baseVector;
}

function draw() {
  background(color1);
  stroke(color2);
  strokeWeight(2);
  translate(origin.x, origin.y);
  line(0, 0, baseVector.x, baseVector.y);
  line(0, 0, movingVector.x, movingVector.y);

  let angle = baseVector.angleBetween(movingVector);
  let movingMag = movingVector.mag();
  let scalerMag = movingMag * cos(angle);
  let scalerVector = baseVector.copy().normalize().mult(scalerMag);

  stroke(color3);
  line(movingVector.x, movingVector.y, scalerVector.x, scalerVector.y);
}

function mouseMoved() {
  movingVector = createVector(mouseX - origin.x, mouseY - origin.y);
}
