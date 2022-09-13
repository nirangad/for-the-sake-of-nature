let color1, color2, color3;
let theta, rope, origin;
let gravity;

function setup() {
  color1 = "#544e61";
  color2 = "#85baa1";
  color3 = "#ceeddb";

  createCanvas(700, 700);
  background(color1);

  gravity = 0.8;
  origin = createVector(0, 0);
  rope = 300;
  theta = 0;
}

function draw() {
  background(color1);
  strokeWeight(2);
  stroke(color3);
  fill(color2);

  translate(width / 2, 0);

  let x = rope * sin(theta);
  let y = rope * cos(theta);
  line(origin.x, origin.y, x, y);
  ellipse(x, y, 30, 30);
}
