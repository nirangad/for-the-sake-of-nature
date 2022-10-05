class MouseJoint extends Joint {
  constructor(world, options = {}) {
    super(world, options);

    this.mouse = this.world.Mouse.create(this.options.element || document.body);
    this.mouse.pixelRatio = this.options.pixelDensity || 1;
    this.options.mouse = this.mouse;

    this.mouseConstraint = this.world.MouseConstraint.create(
      this.world.engine,
      options
    );
    this.constraint = this.mouseConstraint.constraint;
    this.world.addConstraint(this.mouseConstraint);
  }

  body() {
    return this.mouseConstraint.body;
  }
}
