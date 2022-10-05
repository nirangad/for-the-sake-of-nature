class Shape {
  constructor(position, world, options = {}) {
    this.position = position;
    this.world = world;
    this.options = options;

    this.destroyed = false;
    this.fillColor = "#f4e8c1";
    this.strokeColor = "#a0c1b9";
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
      this.world.removeBody(this.body);
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

  setColors(cFill, cStroke) {
    this.fillColor = cFill;
    this.strokeColor = cStroke;
  }

  show() {
    throw Error("Method show() is not implemented");
  }
}
