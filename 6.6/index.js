let color1, color2, color3, color4;
let canvas, canvasSize;

let vehicles, linePathDesire;

function setup() {
  color1 = "#cbbfbb";
  color2 = "#61988e";
  color3 = "#f56960";
  color4 = "#c46d5e";

  canvasSize = { width: 600, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  vehicles = [];
  linePathDesire = new LinePathDesire(
    [createVector(0, height / 2 - 100), createVector(width, height / 2 + 100)],
    20
  );
}

function draw() {
  background(color1);

  linePathDesire.show();

  stroke(color2);
  strokeWeight(2);

  vehicles.forEach((vehicle) => {
    vehicle.steer();
    vehicle.show();
  });
}

function mousePressed() {
  let vehicle = new Vehicle({
    location: createVector(mouseX, mouseY),
    velocity: createVector(5, 0),
    angle: 0,
    maxSpeed: random(2, 3),
    maxForce: random(10, 15),
    desire: linePathDesire,
  });

  vehicles.push(vehicle);
}
