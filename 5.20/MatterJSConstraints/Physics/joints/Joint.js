class Joint {
  constructor(world, options) {
    this.world = world;
    this.options = options;
    this.constraint = this.world.Constraint.create(options);
    this.world.addConstraint(this.constraint);

    this.strokeColor = "#a0c1b9";
  }

  show() {
    push();
    stroke(this.strokeColor);
    strokeWeight(2);
    line(
      this.options.bodyA.position.x,
      this.options.bodyA.position.y,
      this.options.bodyB.position.x,
      this.options.bodyB.position.y
    );
    pop();
  }
}
