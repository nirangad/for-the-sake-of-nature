class Ball {
  constructor(mass, mover, size) {
    this.mass = mass;
    this.mover = mover;
    this.size = size || createVector(20 * this.mass, 20 * this.mass);
    this.mover.setParticle(this);
  }

  move(force) {
    this.mover.applyForce(force, this.mass);
    this.mover.update();
  }

  show() {
    this.mover.update();
    ellipse(
      this.mover.position.x,
      this.mover.position.y,
      this.size.x,
      this.size.y
    );
  }
}
