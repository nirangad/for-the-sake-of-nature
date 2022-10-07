let color1, color2, color3, color4;

let canvas, canvasSize;

let desire, vehicle;
let desires, vehicles;
let agentCount;

function setup() {
  color1 = "#1d3461";
  color2 = "#829cbc";
  color3 = "#376996";
  color4 = "#f7b538";

  canvasSize = { width: 750, height: 800 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  desires = [];
  vehicles = [];
  agentCount = 100;

  for (let i = 0; i < agentCount; i++) {
    desire = new MoveToDesire(createVector(width / 2, height / 2), 60);
    vehicle = new Vehicle({
      location: createVector(
        random(canvasSize.width),
        random(canvasSize.height)
      ),
      angle: 0,
      maxSpeed: random(20, 25),
      maxForce: random(20, 30),
      desire,
    });

    desires.push(desire);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(color1);

  for (let i = 0; i < agentCount; i++) {
    vehicles[i].steer();
    vehicles[i].show();
  }
}

function mouseMoved() {
  for (let i = 0; i < agentCount; i++) {
    desires[i].updateDesire({ target: createVector(mouseX, mouseY) });
    vehicles[i].updateDesire(desires[i]);
  }
}
