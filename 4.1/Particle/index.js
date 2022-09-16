let color1, color2, color3;
let particle;

function setup() {
  color1 = "#9dacb2";
  color2 = "#677db7";
  color3 = "#454b66";

  createCanvas(700, 700);

  particle = new Particle(createVector(0, 0));
  particle.setWeight(5);
  particle.setStyles(color2, color3);
}

function draw() {
  background(color1);
  translate(width / 2, 100);

  strokeWeight(2);
  particle.show();
  particle.applyForce(createVector(0, 0.4));
}
