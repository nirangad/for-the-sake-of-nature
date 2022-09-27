class Box extends PBody {
  constructor(position, size) {
    super(position);
    this.size = size;
    this.createBody();
  }

  show() {
    push();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
    pop();
  }
}
