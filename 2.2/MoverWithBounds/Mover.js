class Mover {
  constructor(position, velocity, acceleration, hasBounds = false) {
    this.position = position;
    this.velocity = velocity || createVector(0, 0);
    this.acceleration = acceleration || createVector(0, 0);
    this.hasBounds = hasBounds;
    this.xBound = createVector(0, width);
    this.yBound = createVector(0, height);
  }

  update() {
    this.position.add(this.velocity);

    if (this.isOutOfBounds && !this.hasBounds) {
      this.position.x = (this.position.x + width) % width;
      this.position.y = (this.position.y + height) % height;
    } else if (this.isOutOfBounds() && this.hasBounds) {
      if (this.isXOutOfBounds()) this.velocity.mult(createVector(-1, 1));
      if (this.isYOutOfBounds()) this.velocity.mult(createVector(1, -1));
    }
  }

  setParticle(obj) {
    this.particle = obj;
    this.xBound = createVector(
      this.particle.size.x / 2,
      width - this.particle.size.x / 2
    );
    this.yBound = createVector(
      this.particle.size.y / 2,
      height - this.particle.size.y / 2
    );
  }

  applyForce(force, mass = 1) {
    if (mass == 0) return new RangeError("Mass cannot be zero (0)");

    this.acceleration = force.div(mass);
    this.velocity.add(this.acceleration);
  }

  setVelocityLimit(limit) {
    this.velocity.limit(limit);
  }

  isOutOfBounds() {
    return this.isXOutOfBounds() || this.isYOutOfBounds();
  }

  isXOutOfBounds() {
    return this.position.x > this.xBound.y || this.position.x < this.xBound.x;
  }

  isYOutOfBounds() {
    return this.position.y > this.yBound.y || this.position.y < this.yBound.x;
  }
}
