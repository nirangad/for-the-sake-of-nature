let color1, color2, color3;
let history;

let radius, theta, aVelocity, aAcceleration;

function setup() {
  color1 = "#c0d6df";
  color2 = "#60495a";
  color3 = "#3f324455";

  createCanvas(700, 500);
  background(color1);

  history = [];

  radius = width / 2 - 20;
  theta = 0;
  aVelocity = 0;
  aAcceleration = 0;
}

function draw() {
  background(color1);

  translate(width / 2, height / 2);

  let x = radius * cos(theta);
  let y = radius * sin(theta);
  history.push({ x, y });

  fill(color2);
  stroke(color3);
  line(0, 0, x, y);
  ellipse(x, y, 5, 5);

  for (let i = 0; i < history.length; i++) {
    let item = history[i];
    ellipse(item.x, item.y, 2, 2);
  }

  theta += 0.1;
  radius -= 0.05;
}
