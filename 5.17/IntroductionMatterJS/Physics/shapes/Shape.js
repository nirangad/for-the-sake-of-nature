class Shape {
  constructor(position, world, options = {}) {
    this.position = position;
    this.world = world;
    this.options = options;
  }

  show() {
    throw Error("Method show() is not implemented");
  }
}
