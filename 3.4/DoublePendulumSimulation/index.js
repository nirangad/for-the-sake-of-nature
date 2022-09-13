let color1, color2, color3;
let theta, rope, pendulums, origin;
let gravity;

function setup() {
  color1 = "#2f3e46";
  color2 = "#84a98c";
  color3 = "#eaeaea55";

  createCanvas(700, 700);
  background(color1);

  gravity = 0.8;
  origin = createVector(0, 0);
  rope = 150;
  theta = PI / 2;
  pendulums = [];
  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      pendulums[i] = new Pendulum(origin, theta, rope + i * 20, 10, gravity);
    } else {
      pendulums[i] = new Pendulum(
        pendulums[i - 1].position,
        theta,
        rope + i * 100,
        1,
        gravity
      );
    }
  }
}

function draw() {
  background(color1);
  strokeWeight(2);
  stroke(color3);
  fill(color2);

  translate(width / 2, 0);
  for (let i = 0; i < pendulums.length; i++) {
    let p = pendulums[i];
    p.show();
    if (i > 0) {
      p.update(pendulums[i - 1].position);
    } else {
      p.update();
    }
  }
}
