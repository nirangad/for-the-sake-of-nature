class Box extends Shape {
  constructor(position, width, height, world, options = {}) {
    super(position, world, options);

    this.width = width;
    this.height = height;
    this.body = this.world.Bodies.rectangle(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      this.options
    );

    this.world.addBody(this.body);
  }

  show() {
    if (!this.validate()) {
      return;
    }
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
