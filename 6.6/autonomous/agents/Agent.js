class Agent {
  constructor(
    { location, velocity, angle, maxSpeed, maxForce, desire = null },
    options = {}
  ) {
    this.desire = desire;
    this.location = location;
    this.velocity = velocity || createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.angle = angle || 0;

    this.maxSpeed = maxSpeed || 1;
    this.maxForce = maxForce || 2;

    this.mass = options.weight || 10;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    if (!this.desire) {
      let base = createVector(1, 0);
      this.angle = base.angleBetween(this.velocity);
      return;
    }
  }

  setVelocity(velocity) {
    this.velocity = velocity;
    if (this.velocity.mag() != 0) {
      this.angle = this.velocity.heading();
    }
    this.update();
  }

  applyForce(force) {
    this.acceleration = force.div(this.mass);
    this.update();
  }

  desireForce() {
    if (!this.desire) return;

    let desireForce = this.desire.calculateDesire(this.velocity, this.location);
    desireForce.limit(this.maxForce);

    return desireForce;
  }

  steer() {
    if (!this.desire) {
      return;
    }

    this.applyForce(this.desireForce());
  }

  updateDesire(desire) {
    this.desire = desire;
  }

  show() {
    throw new Error("Method not implemented: show()");
  }
}
