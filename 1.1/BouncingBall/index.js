let color1, color2, color3;
let ball;
let speed;

function setup() {
  color1 = "#247BA0";
  color2 = "#ff1654";
  color3 = "#70c1b3";

  createCanvas(700, 600);
  background(color1);
  ball = createVector(width / 2, height / 2);
  speed = createVector(20, 5);
  ellipse(ball.x, ball.y, 20, 20);
}

function draw() {
  background(color1);
  fill(color2);
  strokeWeight(4);
  stroke(color3);

  if (ball.x >= width || ball.x <= 0) {
    speed.mult(createVector(-1, 1));
  }
  if (ball.y >= height || ball.y <= 0) {
    speed.mult(createVector(1, -1));
  }

  ball = ball.add(speed);
  ellipse(ball.x, ball.y, 20, 20);
}
