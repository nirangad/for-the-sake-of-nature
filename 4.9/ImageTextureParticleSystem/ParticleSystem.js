class ParticleSystem {
  constructor(origin, size, cFill, cStroke) {
    this.particles = [];
    this.origin = origin;
    this.size = size;

    this.fillColor = cFill || "#FFFFFF";
    this.strokeColor = cStroke || "#222222";
    this.type = Particle;
  }

  init(type) {
    this.type = type;
    for (let i = 0; i < this.size; i++) {
      let particle = new this.type(this.origin.copy());
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

  applyForce(force) {
    this.particles.forEach((p) => p.applyForce(force));
  }

  simulate() {
    for (let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];

      if (particle.isDead()) {
        particle = new this.type(this.origin.copy());
        particle.setWeight(parseInt(random(1, 3)));
        particle.setStyles(this.fillColor, this.strokeColor);
        particle.setLifespan(parseInt(random(0, 255)));
        this.particles[i] = particle;
      }
      particle.show();
      particle.applyForce(createVector(random(-0.5, 0.5), random(-0.01, 1)));
    }
  }
}
