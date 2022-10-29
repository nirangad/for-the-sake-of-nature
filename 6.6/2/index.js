let color1, color2, color3, color4;
let canvas, canvasSize;

let cars, path;

let mClose, mPos;

let debugging;

function setup() {
  color1 = "#cbbfbb";
  color2 = "#61988e";
  color3 = "#f56960";
  color4 = "#c46d5e";

  canvasSize = { width: 800, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  cars = [];
  path = new Path(20);
  path.addPoint(0, parseInt(random(100, 500)));
  path.addPoint(100, parseInt(random(200, 400)));
  //path.addPoint(200, parseInt(random(200, 400)));
  path.addPoint(300, parseInt(random(200, 400)));
  //path.addPoint(400, parseInt(random(200, 400)));
  path.addPoint(500, parseInt(random(200, 400)));
  //path.addPoint(600, parseInt(random(200, 400)));
  path.addPoint(700, parseInt(random(200, 400)));
  path.addPoint(800, parseInt(random(200, 400)));

  debugging = false;
}

function draw() {
  background(color1);

  path.show();
  cars.forEach((car) => {
    car.run(debugging);
  });

  if (mClose) {
    push();
    stroke("red");
    strokeWeight(2);
    line(mPos.x, mPos.y, mClose.x, mClose.y);
    fill(0);
    textSize(16);
    noStroke();
    text(`${parseInt(mClose.x)}, ${parseInt(mClose.y)}`, 50, 50);
    pop();
  }
}

function mousePressed() {
  let car = new Car(
    createVector(mouseX, mouseY),
    createVector(2, 0),
    3,
    3,
    1,
    path
  );
  cars.push(car);
}

function mouseMoved() {
  mPos = createVector(mouseX, mouseY);
  mClose = path.closest(mPos);
}

function keyPressed() {
  if (key === " ") debugging = !debugging;
}
