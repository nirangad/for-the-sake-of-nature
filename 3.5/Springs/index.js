let color1, color2, color3;
let rope, anchor;
let mass;
let gravity;
let K;

let position;
let velocity, acceleration;

function setup() {
  color1 = "#544e61";
  color2 = "#85baa1";
  color3 = "#ceeddb";

  createCanvas(700, 700);
  background(color1);

  mass = 2;
  gravity = createVector(0, 0.07);
  anchor = createVector(0, 0);

  rope = 350;
  K = 0.005;

  position = createVector(150, rope);
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
}

function draw() {
  background(color1);
  strokeWeight(2);
  stroke(color3);
  fill(color2);

  translate(width / 2, 0);
  let gravityForce = gravity.copy();
  gravityForce.mult(mass);

  let springForce = position.copy().sub(anchor);
  if (springForce.mag() > 1) {
    springForce.normalize();
  }
  springForce.mult(-K * (position.dist(anchor) - rope));

  applyForce(gravityForce);
  applyForce(springForce);

  line(anchor.x, anchor.y, position.x, position.y);
  ellipse(position.x, position.y, mass * 10, mass * 10);
}

function applyForce(force) {
  acceleration = force.div(mass);
  velocity.add(acceleration);
  position.add(velocity);
  velocity.mult(0.999);
}
