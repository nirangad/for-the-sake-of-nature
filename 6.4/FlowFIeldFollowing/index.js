let color1, color2, color3, color4;
let canvas, canvasSize;

let flow, cars;

function setup() {
  color1 = "#edddd4";
  color2 = "#c44536";
  color3 = "#197278";
  color4 = "#283d3b";

  canvasSize = { width: 800, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  flow = new FlowField(canvasSize.width, canvasSize.height, 30, 40);
  cars = [];
}

function draw() {
  background(color1);

  // Grid
  flow.display(false, false, true);

  cars.forEach((car) => {
    let carVelocity = flow.getDirection(car.location.x, car.location.y);
    if (carVelocity != null) {
      car.velocity = carVelocity;
      car.update();
      car.show();
    }
  });
}

function mouseMoved() {
  if (mouseX < width && mouseY < height) {
    let car = new Vehicle({
      location: createVector(mouseX, mouseY),
      angle: 0,
      maxSpeed: random(20, 25),
      maxForce: random(20, 30),
    });
    cars.push(car);
  }
}
