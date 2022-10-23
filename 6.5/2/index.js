let color1, color2, color3, color4;
let canvas, canvasSize;

let origin, destination, baseVector, mover, movingVector;

function setup() {
  color1 = "#d6d5c9";
  color2 = "#003844";
  color3 = "#f87060";
  color4 = "#ffb100";

  canvasSize = { width: 600, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  origin = createVector(100, 300);
  destination = createVector(500, 200);

  baseVector = p5.Vector.sub(destination, origin);

  mover = createVector(200, 100);
  movingVector = p5.Vector.sub(mover, origin);
}

function draw() {
  background(color1);

  stroke(color2);
  strokeWeight(3);
  line(origin.x, origin.y, destination.x, destination.y);
  line(origin.x, origin.y, mover.x, mover.y);

  let normBase = baseVector.copy().normalize();
  let scaler = movingVector.dot(normBase);
  let scalerVector = normBase.mult(scaler);
  scalerVector.add(origin);

  stroke(color3);
  push();
  line(mover.x, mover.y, scalerVector.x, scalerVector.y);
  pop();

  push();
  fill(color4);
  noStroke();
  circle(origin.x, origin.y, 10);
  circle(destination.x, destination.y, 10);
  circle(mover.x, mover.y, 10);
  pop();
}

function mouseMoved() {
  mover = createVector(mouseX, mouseY);
  movingVector = p5.Vector.sub(mover, origin);
}
