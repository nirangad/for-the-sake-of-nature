let color1, color2, color3, color4;
let canvas, canvasSize;

let flow, car;

function setup() {
  color1 = "#edddd4";
  color2 = "#c44536";
  color3 = "#197278";
  color4 = "#283d3b";

  canvasSize = { width: 800, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  flow = new FlowField(canvasSize.width, canvasSize.height, 30, 40);
  car = new Vehicle({
    location: createVector(canvasSize.width / 2, canvasSize.height / 2),
    angle: 0,
    maxSpeed: random(20, 25),
    maxForce: random(20, 30),
  });
}

function draw() {
  background(color1);

  // Grid
  flow.display();

  let carVelocity = flow.getDirection(car.location.x, car.location.y);
  car.velocity = carVelocity;
  car.car.update();
  car.show();
}
