class Platform {
  constructor(color, frictionConstant, position, size) {
    this.color = color;
    this.frictionConstant = frictionConstant;
    this.position = position;
    this.size = size;
  }

  show() {
    fill(this.color);
    noStroke();
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
}
