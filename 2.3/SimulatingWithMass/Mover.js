class Mover {
  constructor(position, velocity, acceleration, hasBounds = false) {
    this.position = position;
    this.velocity = velocity || createVector(0, 0);
    this.acceleration = acceleration || createVector(0, 0);
    this.hasBounds = hasBounds;

    this.xBound = { min: 0, max: width };
    this.yBound = { min: 0, max: height };

    this.switched = { x: false, y: false };
  }

  update() {
    this.position.add(this.velocity);

    if (this.isOutOfBounds && !this.hasBounds) {
      this.position.x = (this.position.x + width) % width;
      this.position.y = (this.position.y + height) % height;
    } else if (this.isOutOfBounds() && this.hasBounds) {
      if (this.isXOutOfBounds()) {
        if (!this.switched.x) {
          this.velocity.mult(createVector(-1, 1));
          this.switched.x = true;
        }
      }
      if (this.isYOutOfBounds()) {
        if (!this.switched.y) {
          this.velocity.mult(createVector(1, -1));
          this.switched.y = true;
        }
      }
    } else {
      this.switched = { x: false, y: false };
    }
  }

  setParticle(obj) {
    this.particle = obj;
    this.xBound = {
      min: this.particle.size.x / 2,
      max: width - this.particle.size.x / 2,
    };
    this.yBound = {
      min: this.particle.size.y / 2,
      max: height - this.particle.size.y / 2,
    };
  }

  applyForce(force, mass = 1) {
    if (mass == 0) return new RangeError("Mass cannot be zero (0)");

    this.acceleration = force.div(mass);
    this.velocity.add(this.acceleration);
  }

  isOutOfBounds() {
    return this.isXOutOfBounds() || this.isYOutOfBounds();
  }

  isXOutOfBounds() {
    return (
      this.position.x > this.xBound.max || this.position.x < this.xBound.min
    );
  }

  isYOutOfBounds() {
    return (
      this.position.y > this.yBound.max || this.position.y < this.yBound.min
    );
  }
}
