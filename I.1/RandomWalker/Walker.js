class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }

  walk() {
    let dir = this.randomDirection();
    switch (dir) {
      case 0:
        this.y -= 1;
        break;
      case 1:
        this.y += 1;
        break;
      case 2:
        this.x -= 1;
        break;
      case 3:
        this.x += 1;
        break;
    }
    this.history.push({ x: this.x, y: this.y });
  }

  randomDirection() {
    return floor(random(4)) % 4;
  }
}
