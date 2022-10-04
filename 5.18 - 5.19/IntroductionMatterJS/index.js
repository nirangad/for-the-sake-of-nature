let color1, color2, color3;
let shapes, knobs, world;
let canvasSize;

function setup() {
  color1 = "#605b56";
  color2 = "#f2fbe0";
  color3 = "#acc18a";

  canvasSize = { width: 700, height: 700 };

  createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  world = new MatterWorld(canvasSize.width, canvasSize.height);

  shapes = [];
  knobs = [];

  let knobCount = 4;
  for (let i = 0; i < knobCount; i++) {
    let knob = new Ball(
      createVector((width * (i + 1)) / (knobCount + 1), height / 3),
      10,
      world,
      {
        isStatic: true,
      }
    );
    knobs.push(knob);
  }

  let obstacle = new Box(
    createVector(width / 3, height / 2 + 50),
    250,
    30,
    world,
    {
      isStatic: true,
      angle: PI / 8,
      friction: 0.7,
    }
  );
  knobs.push(obstacle);

  obstacle = new Box(
    createVector((width * 2) / 3, height / 2 + 200),
    250,
    30,
    world,
    {
      isStatic: true,
      angle: -PI / 8,
      friction: 0.1,
    }
  );
  knobs.push(obstacle);

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

  let destroyed = [];
  shapes.forEach((shape) => {
    if (shape.destroyed) {
      destroyed.push(shape);
    }
    shape.show();
  });

  shapes = shapes.filter((shape) => {
    return !destroyed.includes(shape);
  });
}

function mousePressed() {
  let shape = new Box(createVector(mouseX, mouseY), 50, 50, world, {
    restitution: 0.8,
  });
  shapes.push(shape);
  console.log(
    `Bodies: ${world.world.bodies.length}\t\t Shapes: ${shapes.length}`
  );
}
