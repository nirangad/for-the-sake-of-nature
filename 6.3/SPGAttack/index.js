let color1, color2, color3, color4;
let canvas, canvasSize;

let attacker;

function setup() {
  color1 = "#92977e";
  color2 = "#fefcad";
  color3 = "#9ee493";
  color4 = "#f9dc5c";

  canvasSize = { width: 800, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  attacker = new SPGAttackSimulator();
}

function draw() {
  background(color1);

  attacker.update();
  attacker.show();
}

function mousePressed() {
  attacker.spg.fire(attacker.tank);
}
