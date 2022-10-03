let color1, color2, color3;
let shapes, world;

function setup() {
  color1 = "#605b56";
  color2 = "#f2fbe0";
  color3 = "#acc18a";

  createCanvas(700, 700);
  background(color1);

  world = new MatterWorld();

  shapes = [];

  let shape = new Box(createVector(width / 2, 100), 100, 100, world);
  shapes.push(shape);

  shape = new Ball(createVector(width / 2, height / 2), 10, world, {
    isStatic: true,
  });
  shapes.push(shape);
  shapes.forEach((shape) => {
    world.addBody(shape.body);
  });
  world.run();
}

function draw() {
  background(color1);

  fill(color2);
  stroke(color3);
  noStroke();
  strokeWeight(0);

  shapes.forEach((shape) => {
    shape.show();
  });
}
