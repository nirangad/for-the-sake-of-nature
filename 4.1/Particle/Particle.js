class Particle {
  constructor(position, velocity, acceleration) {
    this.position = position || createVector(0, 0);
    this.lifespan = 255;
    this.weight = 1;

    this.velocity = velocity || createVector(0, 0);
    this.acceleration = acceleration || createVector(0, 0);

    this.fillColor = "#FFFFFF";
    this.strokeColor = "#222222";
  }

  setWeight(weight) {
    if (weight <= 0) return;

    this.weight = weight;
  }

  setLifespan(lifespan) {
    if (lifespan < 0) return;

    this.lifespan = lifespan;
  }

  setStyles(cFill, cStroke) {
    this.fillColor = cFill;
    this.strokeColor = cStroke;
  }

  setRect(isRect) {
    this.isRect = !!isRect;
  }

  update() {
    if (this.isDead()) return;

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  applyForce(force) {
    this.acceleration = force.div(this.weight);
    this.update();
    this.acceleration.mult(0);
  }

  show() {
    let alpha = this.lifespan.toString(16);
    if (alpha.length == 1) {
      alpha = `0${alpha}`;
    }

    push();
    fill(`${this.fillColor}${alpha}`);
    stroke(`${this.strokeColor}${alpha}`);
    if (this.isRect) {
      rect(
        this.position.x,
        this.position.y,
        this.weight * 10,
        this.weight * 10
      );
    } else {
      ellipse(
        this.position.x,
        this.position.y,
        this.weight * 10,
        this.weight * 10
      );
    }
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }

  kill() {
    this.lifespan = 0;
  }
}
