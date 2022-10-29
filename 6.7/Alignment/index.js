let color1, color2, color3, color4;
let canvas, canvasSize;

let ants, ant1, ant2;

let mClose, mPos;

let debugging;

function setup() {
  color1 = "#2d3047";
  color2 = "#dbdbdb";
  color3 = "#85c7f2";
  color4 = "#29bf12";

  canvasSize = { width: 700, height: 600 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  ants = [];
  ant1 = new Ant(createVector(50, 100), createVector(2, 0), 3, 3, 1);
  ant2 = new Ant(createVector(50, height - 100), createVector(2, 0), 2, 3, 1);

  ants.push(ant1);
  ants.push(ant2);
  debugging = false;
}

function draw() {
  background(color1);

  for (let i = 0; i < ants.length; i++) {
    ants[i].run();
  }
}

function keyPressed() {
  if (key === " ") debugging = !debugging;
}
