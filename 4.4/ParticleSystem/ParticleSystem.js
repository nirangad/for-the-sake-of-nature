class ParticleSystem {
  constructor(origin, size, cFill, cStroke) {
    this.particles = [];
    this.origin = origin;
    this.size = size;

    this.fillColor = cFill || "#FFFFFF";
    this.strokeColor = cStroke || "#222222";
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      let particle = new Particle(this.origin.copy());
      particle.setWeight(parseInt(random(1, 3)));
      particle.setStyles(this.fillColor, this.strokeColor);
      particle.setLifespan(parseInt(random(100, 255)));
      this.particles[i] = particle;
    }
  }

  setStyles(cFill, cStroke) {
    this.fillColor = cFill;
    this.strokeColor = cStroke;
    this.init();
  }

  simulate() {
    for (let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];

      if (particle.isDead()) {
        particle = new Particle(this.origin.copy());
        particle.setWeight(parseInt(random(1, 3)));
        particle.setStyles(this.fillColor, this.strokeColor);
        particle.setLifespan(parseInt(random(50, 255)));
        this.particles[i] = particle;
      }
      particle.show();
      particle.applyForce(createVector(random(-1, 1), random(-2, 3)));
    }
  }
}
