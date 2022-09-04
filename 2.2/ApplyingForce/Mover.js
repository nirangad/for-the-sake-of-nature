class Mover {
  constructor(position, velocity, acceleration) {
    this.position = position;
    this.velocity = velocity || createVector(0, 0);
    this.acceleration = acceleration || createVector(0, 0);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    if (this.isOutOfBounds) {
      this.position.x = (this.position.x + width) % width;
      this.position.y = (this.position.y + height) % height;
    }

    this.acceleration.mult(0);
  }

  applyForce(force, mass = 1) {
    if (mass == 0) return new RangeError("Mass cannot be zero (0)");

    this.acceleration = force.div(mass);
    this.update();
  }

  setVelocityLimit(limit) {
    this.velocity.limit(limit);
  }

  isOutOfBounds() {
    return (
      this.position.x > width ||
      this.position.x < 0 ||
      this.position.y > height ||
      this.position.y < 0
    );
  }
}
