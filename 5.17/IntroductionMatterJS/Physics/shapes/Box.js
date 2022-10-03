class Box {
  constructor(position, width, height, world, options = {}) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.world = world;

    this.options = options;
    this.body = this.world.Bodies.rectangle(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      this.options
    );
  }

  show() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
