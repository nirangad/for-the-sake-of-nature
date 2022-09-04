let color1, color2, color3;
let balls;

function setup() {
  color1 = "#edd382";
  color2 = "#56413E";
  color3 = "#99b2dd";

  createCanvas(700, 500);
  background(color1);

  balls = [];

  for (let i = 0; i < 10; i++) {
    let pos = createVector(random(50, width - 50), height / 4);
    let vel = createVector(0, 0);
    let acc = createVector(0, 0);

    let mover = new Mover(pos, vel, acc, true);
    let ball = new Ball(random(1, 4), mover);
    balls[i] = ball;
  }
}

function draw() {
  background(color1);
  stroke(color3);
  fill(color2);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.show();

    let gravity = createVector(0, 0.1);
    ball.move(gravity.mult(ball.mass));

    let wind = createVector(0.5, 0);
    ball.move(wind);
  }
}
