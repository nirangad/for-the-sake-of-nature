class Agent {
  constructor(
    { location, velocity, angle, maxSpeed, maxForce, desire },
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

    this.inDesireMode = {
      enabled: false,
      velocity: this.velocity,
    };
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    if (
      !this.inDesireMode.enabled &&
      this.desire.desireSatisfied(this.location)
    ) {
      this.inDesireMode.enabled = true;
      this.inDesireMode.velocity = this.velocity;
    } else if (this.inDesireMode.enabled) {
      this.inDesireMode.enabled = false;
    }
  }

  applyForce(force) {
    this.acceleration = force.div(this.mass);
    this.update();
  }

  desireForce() {
    let desireForce = this.desire.calculateDesire(this.location);
    desireForce.limit(this.maxForce);
    if (this.velocity.mag() == 0) {
      this.angle = this.desire.target.heading();
    } else {
      this.angle = this.velocity.heading();
    }

    return desireForce;
  }

  steer() {
    if (this.inDesireMode.enabled) {
      this.applyForce(
        this.inDesireMode.velocity.mult(
          this.desire.toTaregtDesireProgress(this.location)
        )
      );
    } else {
      this.applyForce(this.desireForce().limit(this.maxForce));
    }
  }

  updateDesire(desire) {
    this.desire = desire;
  }

  show() {
    throw new Error("Method not implemented: show()");
  }
}
