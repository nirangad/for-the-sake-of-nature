class Mover {
  constructor(location, mass = 1, loopx = true, loopy = true) {
    this.location = location;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.loopx = loopx;
    this.loopy = loopy;
  }

  update() {
    this.velocity.add(this.acceleration);
    if (this.limit && this.limit > 0) {
      this.velocity.limit(this.limit);
    }
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    if (this.loopx && this.location.x > width) {
      this.location.x = 0;
    }

    if (this.loopy && this.location.y > height) {
      this.location.y = 0;
    }
  }

  applyForce(force) {
    this.acceleration = force.div(this.mass);
    this.update();
  }

  limitVelocity(limit) {
    this.limit = limit;
  }

  show() {
    throw new Error("Methos not implemented: show()");
  }

  outOfBounds() {
    return (
      this.location.x < 0 ||
      this.location.x > width ||
      this.location.y < 0 ||
      this.location.y > height
    );
  }

  getBoundaries() {
    throw new Error("Methos not implemented: getBoundaries()");
  }

  getDimensions() {
    throw new Error("Methos not implemented: getDimensions()");
  }
}
