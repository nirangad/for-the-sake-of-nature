let color1, color2, color3;
let theta, rope, origin;
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

  gravity = 0.8;
  mass = 2;
  origin = createVector(0, 0);
  rope = 300;
  theta = 0;
  K = 0.05;

  position = createVector(0, rope + 50);
  velocity = 0;
  acceleration = 0;
}

function draw() {
  background(color1);
  strokeWeight(2);
  stroke(color3);
  fill(color2);

  translate(width / 2, 0);

  let f = -K * (position.y - rope);
  applyForce(f);

  line(origin.x, origin.y, position.x, position.y);
  ellipse(position.x, position.y, mass * 10, mass * 10);
}

function applyForce(force) {
  acceleration = force / mass;
  velocity += acceleration;
  position.y += velocity;
}
