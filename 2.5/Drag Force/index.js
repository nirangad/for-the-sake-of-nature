let color1, color2, color3;
let water;
let box;
let gravity;

function setup() {
  color1 = "#dae2df";
  color2 = "#2f2504";
  color3 = "#1982c4";

  createCanvas(700, 500);
  background(color1);

  gravity = createVector(0, 0.4);

  let boxWeight = 5;
  let boxPosition = createVector(width / 2, 0);
  box = new Box(boxPosition, boxWeight);

  let density = 0.075;
  let dragCoefficient = 0.0025;
  let waterMediumBounds = createVector(0, height / 2);
  let waterMediumSize = { width, height: height / 2 };

  water = new Medium(
    color3,
    waterMediumBounds,
    waterMediumSize,
    density,
    dragCoefficient
  );
  water.show();
}

function draw() {
  background(color1);

  water.show();

  fill(color2);
  noStroke();

  box.show();
  if (box.position.y + box.size <= height) {
    let gravityForce = gravity.mult(box.weight);
    box.applyForce(gravityForce);

    if (water.inBounds(box.position)) {
      let dragForce = water.dragForce(box.velocity.copy(), box.effectiveArea());
      box.applyForce(dragForce);
    }

    box.update();
  }
}
