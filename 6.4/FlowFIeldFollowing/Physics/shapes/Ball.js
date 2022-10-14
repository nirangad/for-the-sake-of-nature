class Ball extends Shape {
  constructor(position, radius, world, options = {}) {
    super(position, world, options);

    this.radius = radius;
    this.body = this.world.Bodies.circle(
      this.position.x,
      this.position.y,
      this.radius,
      this.options
    );

    this.world.addBody(this.body);
  }

  show() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);

    fill(this.fillColor);
    stroke(this.strokeColor);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    if (this.showDebug) {
      stroke(this.debugStrokeColor);
      strokeWeight(2);
      line(0, 0, this.radius, 0);
    }
    pop();
  }
}
