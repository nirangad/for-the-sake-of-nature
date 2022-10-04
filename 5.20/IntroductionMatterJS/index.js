let color1, color2, color3;
let ground, world;
let canvasSize;

let item;

function setup() {
  color1 = "#331e38";
  color2 = "#f4e8c1";
  color3 = "#a0c1b9";

  canvasSize = { width: 750, height: 800 };

  createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  world = new MatterWorld(canvasSize.width, canvasSize.height);

  ground = new Box(createVector(width / 2, height), width * 1.1, 100, world, {
    isStatic: true,
    friction: 0.7,
  });
  ground.setColors("#720026", "#0a0908");

  world.run();
}

function draw() {
  background(color1);

  fill(color2);
  stroke(color3);
  noStroke();
  strokeWeight(0);

  ground.show();
  if (item) {
    item.show();
  }
}

function mousePressed() {
  if (item) {
    item.destroy();
    item = null;
    console.log(world.bodies.length);
    return;
  }
  item = new Box(createVector(mouseX, mouseY), 10, 10, world, {
    friction: 0.7,
  });
  console.log(world.bodies.length);
}
