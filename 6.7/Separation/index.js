let color1, color2, color3, color4;
let canvas, canvasSize;

let mClose, mPos;

let balls, bCount;

let debugging;

let mPressed, mSx, mSy, mEx, mEy;

function setup() {
  color1 = "#A41623";
  color2 = "#110B11";
  color3 = "#F2F4CB";
  color4 = "#32292F";

  canvasSize = { width: 700, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  let vel = createVector(1, 1);

  (mSx = 0), (mSy = 0), (mEx = 0), (mEy = 0);

  balls = [];
  bCount = 2;

  for (let i = 0; i < bCount; i++) {
    let ball = new Ball(
      createVector(random(0, width), random(0, height)),
      vel.copy(),
      2,
      5,
      1,
      null,
      150
    );
    balls.push(ball);
  }

  debugging = false;
}

function draw() {
  background(color1);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.run(false, balls);
  }
}

function keyPressed() {
  if (key === " ") debugging = !debugging;
}

function mousePressed(event) {
  mSx = mouseX;
  mSy = mouseY;
}

function mouseReleased(event) {
  mEx = mouseX;
  mEy = mouseY;

  let vel = p5.Vector.sub(createVector(mEx, mEy), createVector(mSx, mSy));
  vel.normalize().mult(2);
  let ball = new Ball(createVector(mSx, mSy), vel, 2, 2, 1, null, 150);
  balls.push(ball);
}
