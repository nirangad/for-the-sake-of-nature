let color1, color2, color3;
let ball;

function setup() {
  color1 = "#6d72c3";
  color2 = "#1d1128";
  color3 = "#5941a9";

  createCanvas(700, 500);
  background(color1);

  let pos = createVector(0, 0);
  let vel = createVector(0, 0);
  let acc = createVector(0, 0);
  ball = new Ball(pos, vel, acc);
  //frameRate(10);
}

function draw() {
  background(color1);
  stroke(color3);
  fill(color2);

  ball.update();
  ball.show();
}
