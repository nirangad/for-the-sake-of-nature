class Shape {
  constructor(position, world, options = {}) {
    this.position = position;
    this.world = world;
    this.options = options;

    this.destroyed = false;
  }

  isOutOfBounds() {
    return (
      this.body.position.x < 0 ||
      this.body.position.x > this.world.width ||
      this.body.position.y < 0 ||
      this.body.position.y > this.world.height
    );
  }

  destroy() {
    if (this.body) {
      let index = this.world.bodies.indexOf(this.body);
      this.world.bodies.splice(index, 1);
      this.body = null;
      this.destroyed = true;
    }
  }

  validate() {
    if (this.destroyed) return false;

    if (this.isOutOfBounds()) {
      this.destroy();
      return false;
    }
    return true;
  }

  show() {
    throw Error("Method show() is not implemented");
  }
}
