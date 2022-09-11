class Pendulum {
  constructor(origin, angle, rope, mass, gravity) {
    this.origin = origin;
    this.angle = angle;
    this.mass = mass;
    this.rope = rope;
    this.gravity = gravity;

    this.angVelocity = 0;
    this.angAcceleration = 0;

    this.position = createVector(
      this.rope * sin(this.angle),
      this.rope * cos(this.angle)
    );
  }

  update() {
    let angGravityForce = -1 * this.mass * this.gravity * sin(this.angle);
    this.angAcceleration = angGravityForce / this.mass;
    this.angAcceleration /= this.rope;

    this.angVelocity += this.angAcceleration;
    this.angle += this.angVelocity;

    this.position = createVector(
      this.rope * sin(this.angle),
      this.rope * cos(this.angle)
    );
  }

  show() {
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipse(this.position.x, this.position.y, 30, 30);
  }
}
