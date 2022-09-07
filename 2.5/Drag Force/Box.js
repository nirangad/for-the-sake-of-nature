class Box {
  constructor(position, weight) {
    this.position = position;
    this.weight = weight;
    this.size = 20 + this.weight * 5;

    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  show() {
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  update() {
    this.position.add(this.velocity);
  }

  applyForce(force) {
    this.acceleration = force.div(this.weight);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  effectiveArea() {
    return this.size * this.size;
  }
}
