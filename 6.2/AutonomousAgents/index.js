let color1, color2, color3, color4;

let canvas, canvasSize;

let desire, vehicle;

function setup() {
  color1 = "#1d3461";
  color2 = "#829cbc";
  color3 = "#376996";
  color4 = "#f7b538";

  canvasSize = { width: 750, height: 800 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  desire = new MoveToDesire(createVector(width / 2, height / 2));
  vehicle = new Vehicle({
    location: createVector(10, 10),
    angle: 0,
    maxSpeed: 10,
    maxForce: 12,
    desire,
  });
}

function draw() {
  background(color1);
  vehicle.steer();
  vehicle.show();
}

function mouseMoved() {
  desire.updateDesire({ target: createVector(mouseX, mouseY) });
  vehicle.updateDesire(desire);
}
