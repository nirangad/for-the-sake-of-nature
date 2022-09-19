class ParticleSystem {
  constructor(origin, size, cFill, cStroke) {
    this.particles = [];
    this.origin = origin;
    this.size = size;

    this.fillColor = cFill || "#FFFFFF";
    this.strokeColor = cStroke || "#222222";
    this.init();
    this.step = 0;
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      let particle = new Particle(this.origin);
      particle.setWeight(parseInt(random(1, 3)));
      particle.setStyles(this.fillColor, this.strokeColor);
      particle.setLifespan(parseInt(random(0, 255)));
      this.particles[i] = particle;
    }
  }

  setStyles(cFill, cStroke) {
    this.fillColor = cFill;
    this.strokeColor = cStroke;
    this.init();
  }

  stepSimulate() {
    if (this.step >= this.size) this.step %= this.size;

    let particle = this.particles[this.step];

    if (particle.isDead()) {
      particle = new Particle(this.origin);
      particle.setWeight(parseInt(random(1, 3)));
      particle.setStyles(this.fillColor, this.strokeColor);
      this.particles[this.step] = particle;
    }
    particle.show();
    particle.applyForce(createVector(random(-1, 1), random(-2, 3)));
  }

  simulate() {
    for (let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];

      if (particle.isDead()) {
        particle = new Particle(this.origin);
        particle.setWeight(parseInt(random(1, 3)));
        particle.setStyles(this.fillColor, this.strokeColor);
        this.particles[i] = particle;
      }
      particle.show();
      particle.applyForce(createVector(random(-1, 1), random(-2, 3)));
    }
  }
}
