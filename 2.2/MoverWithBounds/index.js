let color1, color2, color3;
let ball;

function setup() {
  color1 = "#edd382";
  color2 = "#56413E";
  color3 = "#99b2dd";

  createCanvas(700, 500);
  background(color1);

  let pos = createVector(width / 2, height / 2);
  let vel = createVector(0, 0);
  let acc = createVector(0, 0);

  let mover = new Mover(pos, vel, acc, true);
  let ballSize = createVector(50, 50);
  ball = new Ball(1, mover, ballSize);
}

function draw() {
  background(color1);
  stroke(color3);
  fill(color2);

  ball.show();

  let gravity = createVector(0, 0.1);
  ball.move(gravity);

  let wind = createVector(0.05, 0);
  ball.move(wind);
}

function mouseClicked() {
  let ventBlow = createVector(-0.5, -0.5);
  ball.move(ventBlow);
}
