let color1, color2, color3;
let particles;

function setup() {
  color1 = "#9dacb2";
  color2 = "#677db7";
  color3 = "#454b66";

  createCanvas(700, 700);

  particles = [];

  for (let i = 0; i < 100; i++) {
    particle = new Particle(createVector(0, 0));
    particle.setWeight(parseInt(random(1, 3)));
    particle.setStyles(color2, color3);
    particle.setLifespan(parseInt(random(0, 255)));
    particles.push(particle);
  }
}

function draw() {
  background(color1);
  translate(width / 2, 100);

  strokeWeight(2);

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];

    if (particle.isDead()) {
      particle = new Particle(createVector(0, 0));
      particle.setWeight(parseInt(random(1, 3)));
      particle.setStyles(color2, color3);
      particles[i] = particle;
    }
    particle.show();
    particle.applyForce(createVector(random(-1, 1), random(-2, 3)));
  }
}
