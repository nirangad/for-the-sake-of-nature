class Ball {
  constructor(mass, mover) {
    this.mass = mass;
    this.mover = mover;
  }

  move(force) {
    this.mover.applyForce(force, this.mass);
    this.mover.update();
  }

  show() {
    this.mover.update();
    ellipse(this.mover.position.x, this.mover.position.y, 20, 20);
  }
}
