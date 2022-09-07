class Medium {
  constructor(color, position, size, density, dragCoefficient) {
    this.color = color;
    this.position = position;
    this.size = size;
    this.density = density;
    this.dragCoefficient = dragCoefficient;
  }

  show() {
    fill(this.color);
    noStroke();
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
  }

  inBounds(position) {
    return (
      this.position.x <= position.x &&
      this.position.x + this.size.width >= position.x &&
      this.position.y <= position.y &&
      this.position.y + this.size.height >= position.y
    );
  }

  dragForce(velocity, area) {
    // Drag Force = 1/2 * ρ * v^2 * C * A
    // ρ - Density of medium
    // v - speed of the object
    // C - Drag Coefficient
    // A - Area of the object
    let dragForce =
      velocity.mag() * this.density + (this.dragCoefficient * area) / 2;
    return velocity.mult(dragForce * -1);
  }
}
