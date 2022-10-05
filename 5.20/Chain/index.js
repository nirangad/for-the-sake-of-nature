let color1, color2, color3;
let world;
let canvas, canvasSize;

let shapes;
let constraints, mConstraint;

function setup() {
  color1 = "#331e38";
  color2 = "#f4e8c1";
  color3 = "#f87060";
  color4 = "#82ff9e";

  canvasSize = { width: 750, height: 800 };

  canvas = createCanvas(canvasSize.width, canvasSize.height);
  background(color1);

  shapes = [];
  constraints = [];

  initWorld();
  addShapesAndConstraints();
  addMouseMonstraints();
}

function initWorld() {
  world = new MatterWorld(canvasSize.width, canvasSize.height);
  world.run();
}

function addShapesAndConstraints() {
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

  // Chain Shapes & Constraints
  let prevShape;
  let ballsCount = 10;
  for (let i = 0; i < 10; i++) {
    // Chain Shapes
    let x = i == 0 ? width / 2 : (width * (i + 1)) / ballsCount;
    shape = new Ball(createVector(x, 50), 15, world, {
      friction: 0.2,
      restitution: 0.8,
      isStatic: i == 0,
    });
    shapes.push(shape);

    // Chain Constraints
    if (prevShape) {
      let abJoint = new SimpleJoint(world, {
        bodyA: prevShape.body,
        bodyB: shape.body,
        pointA: { x: 0, y: 0 },
        pointB: { x: 0, y: 0 },
        length: 55,
        stiffness: 0.4,
        damping: 0.01,
      });
      constraints.push(abJoint);
    }
    prevShape = shape;
  }
}

function addMouseMonstraints() {
  mConstraint = new MouseJoint(world, {
    element: canvas.elt,
    pixelDensity: pixelDensity(),
  });
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
    shape.showDebugStroke(true);
  });

  if (mConstraint.body()) {
    let pos = mConstraint.body().position;
    let mPos = mConstraint.mouse.position;
    let offset = mConstraint.constraint.pointB;

    fill(color3);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 15, 15);

    stroke(color4);
    strokeWeight(2);
    line(pos.x + offset.x, pos.y + offset.y, mPos.x, mPos.y);
  }
}
