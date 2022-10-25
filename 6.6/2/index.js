let color1, color2, color3, color4;
let canvas, canvasSize;

let cars, path;

function setup() {
  color1 = "#cbbfbb";
  color2 = "#61988e";
  color3 = "#f56960";
  color4 = "#c46d5e";

  canvasSize = { width: 600, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  cars = [];
  path = new Path(50);
  path.addPoint(0, random(100, 500));
  path.addPoint(100, random(100, 500));
  path.addPoint(200, random(100, 500));
  path.addPoint(300, random(100, 500));
  path.addPoint(400, random(100, 500));
  path.addPoint(500, random(100, 500));
  path.addPoint(600, random(100, 500));
}

function draw() {
  background(color1);

  path.show();
  cars.forEach((car) => {
    car.run();
  });
}

function mousePressed() {
  let car = new Car(
    createVector(mouseX, mouseY),
    createVector(2, 0),
    5,
    2,
    1,
    path
  );
  cars.push(car);
}
