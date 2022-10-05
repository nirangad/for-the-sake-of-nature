let color1, color2, color3;
let world;
let canvasSize;

let shapes;
let constraints;

function setup() {
  color1 = "#331e38";
  color2 = "#f4e8c1";
  color3 = "#a0c1b9";

  canvasSize = { width: 750, height: 800 };

  createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  shapes = [];
  constraints = [];

  initWorld();
  addShapes();
}

function initWorld() {
  world = new MatterWorld(canvasSize.width, canvasSize.height);
  world.run();
}

function addShapes() {
  // Ground
  let shape = new Box(
    createVector(width / 2, height),
    width * 1.1,
    100,
    world,
    {
      isStatic: true,
      friction: 0.5,
    }
  );
  shape.setColors("#720026", "#0a0908");
  shapes.push(shape);

  // Body A
  let bodyA = new Ball(createVector(width / 2 - 10, 10), 20, world, {
    friction: 0.2,
    restitution: 0.8,
  });
  shapes.push(bodyA);

  // Body B
  let bodyB = new Ball(createVector(width / 2, 50), 20, world, {
    friction: 0.2,
    restitution: 0.8,
  });
  shapes.push(bodyB);

  let abJoint = new Joint(world, {
    bodyA: bodyA.body,
    bodyB: bodyB.body,
    pointA: { x: 0, y: 0 },
    pointB: { x: 0, y: 0 },
    length: 250,
    stiffness: 0,
    damping: 0.01,
  });
  constraints.push(abJoint);
}

function draw() {
  background(color1);

  fill(color2);
  stroke(color3);
  noStroke();
  strokeWeight(0);

  constraints.forEach((joint) => {
    joint.show();
  });

  shapes.forEach((shape) => {
    shape.show();
  });
}

function mousePressed() {
  // item = new Box(createVector(mouseX, mouseY), 10, 10, world, {
  //   friction: 0.7,
  //   restitution: 0.8,
  // });
}
