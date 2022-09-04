let color1, color2, color3;
let ball;

function setup() {
  color1 = "#fc9e4f";
  color2 = "#020122";
  color3 = "#edd382";

  createCanvas(700, 500);
  background(color1);

  let pos = createVector(width / 2, height / 2);
  let vel = createVector(0, 0);
  let acc = createVector(0, 0);

  let mover = new Mover(pos, vel, acc, true);
  ball = new Ball(1, mover);
}

function draw() {
  background(color1);
  stroke(color3);
  fill(color2);

  ball.show();
}

function mousePressed() {
  let force = createVector(random(-1, 1), random(-1, 1));
  ball.move(force);
}
