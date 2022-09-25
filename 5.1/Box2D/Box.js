class Box {
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }

  show() {
    push();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size, this.size);
    pop();
  }
}
