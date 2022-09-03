class Ball {
  constructor(position, velocity, acceleration) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    if (this.isOutOfBounds()) {
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      return;
    }
    this.acceleration = mouse.sub(this.position);
    this.acceleration.mult(0.01);

    this.velocity.limit(15);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  show() {
    ellipse(this.position.x, this.position.y, 20, 20);
  }

  isOutOfBounds() {
    return mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0;
  }
}
