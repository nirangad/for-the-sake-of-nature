let color1, color2, color3;
let platforms;
let box;

function setup() {
  color1 = "#57a773";
  color2 = "#edfbc1";
  color3 = "#684a52";

  createCanvas(700, 500);
  background(color1);

  platforms = [];
  // Ground
  let ground = new Platform(
    "#553d36",
    1,
    createVector(width / 2, (3 * height) / 4),
    {
      width: width / 4,
      height: 50,
    }
  );
  platforms.push(ground);

  // Grass
  let grass = new Platform(
    "#a8c256",
    0.01,
    createVector(width / 4, (3 * height) / 4),
    {
      width: width / 4,
      height: 50,
    }
  );
  platforms.push(grass);

  // Ice
  let ice = new Platform("#11b5e4", 0.0001, createVector(0, (3 * height) / 4), {
    width: width / 4,
    height: 50,
  });
  platforms.push(ice);

  // Metal
  let metal = new Platform(
    "#c9c9c9",
    1,
    createVector((3 * width) / 4, (3 * height) / 4),
    {
      width: width / 4,
      height: 50,
    }
  );
  platforms.push(metal);

  let weight = 2;
  box = new Box(createVector(0, (3 * height) / 4 - 20 * weight), weight);
}

function draw() {
  background(color1);
  fill(color2);
  noStroke();

  box.show();
  box.update();

  for (let i = 0; i < platforms.length; i++) {
    platforms[i].show();
    if (
      box.position.x >= platforms[i].position.x &&
      box.position.x <= platforms[i].position.x + platforms[i].size.width &&
      box.velocity.mag() > 0
    ) {
      let v = box.velocity.copy();
      v.normalize();
      let friction = v.mult(-1 * platforms[i].frictionConstant * box.weight);
      box.applyForce(friction);
    }
  }
}

function mousePressed() {
  box.applyForce(createVector(10, 0));
}
