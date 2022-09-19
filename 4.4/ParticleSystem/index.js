let color1, color2, color3;
let particles;
let particleSystems;

function setup() {
  color1 = "#3a606e";
  color2 = "#a71d31";
  color3 = "#3f0d12";

  createCanvas(700, 700);
  particleSystems = [];
}

function draw() {
  background(color1);

  strokeWeight(2);
  for (let i = 0; i < particleSystems.length; i++) {
    particleSystems[i].simulate();
  }
}

function mousePressed() {
  let origin = createVector(mouseX, mouseY);
  let particleSystem = new ParticleSystem(
    origin,
    random(100, 200),
    color2,
    color3
  );
  particleSystems.push(particleSystem);
}
