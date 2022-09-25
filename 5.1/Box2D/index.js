let color1, color2, color3;
let boxes;

function setup() {
  color1 = "#a5243d";
  color2 = "#b48291";
  color3 = "#b48291";

  createCanvas(700, 700);
  background(color3);
  boxes = [];
}

function draw() {
  background(color3);

  fill(color1);
  stroke(color2);
  boxes.forEach((box) => {
    box.show();
  });
}

function mouseDragged() {
  let box = new Box(createVector(mouseX, mouseY), 50);
  boxes.push(box);
}
