class Agent {
  constructor(location, velocity, maxSpeed, maxForce, mass, path = null) {
    this.location = location;
    this.velocity = velocity || createVector(2, 0);
    this.acceleration = createVector(0, 0);

    this.angle = this.velocity.heading();

    this.maxSpeed = maxSpeed || 4;
    this.maxForce = maxForce || 1;

    this.mass = mass || 1;
    this.path = path;
    this.debugging = false;
  }

  run(debugging = false) {
    throw new Error("Method not implemented: run(debugging)");
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.angle = this.velocity.heading();
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    force.limit(this.maxForce);
    this.acceleration = force.div(this.mass);
    this.update();
  }

  steer() {
    throw new Error("Method not implemented: steer()");
  }

  follow() {
    throw new Error("Method not implemented: follow()");
  }

  show() {
    throw new Error("Method not implemented: show()");
  }
}
