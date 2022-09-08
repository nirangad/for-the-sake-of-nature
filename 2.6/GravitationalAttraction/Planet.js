class Planet {
  constructor(position, mass) {
    this.position = position;
    this.mass = mass;
    this.size = 20 + this.mass * 5;

    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  show() {
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  update() {
    this.position.add(this.velocity);
  }

  applyForce(force) {
    this.acceleration = force.div(this.mass);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }
}
