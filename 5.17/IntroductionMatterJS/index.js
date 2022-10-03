let color1, color2, color3;
let shapes, knobs, world;

function setup() {
  color1 = "#605b56";
  color2 = "#f2fbe0";
  color3 = "#acc18a";

  createCanvas(700, 700);
  background(color1);

  world = new MatterWorld();

  shapes = [];
  knobs = [];

  let knobCount = 5;
  for (let i = 0; i < knobCount; i++) {
    let knob = new Ball(
      createVector((width * (i + 1)) / (knobCount + 1), height / 2),
      10,
      world,
      {
        isStatic: true,
      }
    );
    knobs.push(knob);
  }

  world.run();
}

function draw() {
  background(color1);

  fill(color2);
  stroke(color3);
  noStroke();
  strokeWeight(0);

  knobs.forEach((knob) => {
    knob.show();
  });

  shapes.forEach((shape) => {
    shape.show();
  });
}

function mousePressed() {
  let shape = new Box(createVector(mouseX, mouseY), 80, 80, world);
  shapes.push(shape);
}
