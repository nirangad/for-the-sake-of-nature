let color1, color2, color3;
let centerPos;
let pointer;

function setup() {
  color1 = "#247BA0";
  color2 = "#ff1654";
  color3 = "#70c1b3";

  createCanvas(700, 600);
  background(color1);

  translate(width / 2, height / 2);
  centerPos = createVector(0, 0);
  pointer = createVector(mouseX, mouseY);
}

function draw() {
  background(color1);
  strokeWeight(4);
  stroke(color3);

  translate(width / 2, height / 2);
  pointer = createVector(mouseX - width / 2, mouseY - height / 2);
  pointer.sub(centerPos);
  line(centerPos.x, centerPos.y, pointer.x, pointer.y);
}
