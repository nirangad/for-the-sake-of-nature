class Walker {
  UP = 0;
  DOWN = 1;
  LEFT = 2;
  RIGHT = 3;
  constructor(x, y, bias = false) {
    this.x = x;
    this.y = y;
    this.bias = bias;
    this.history = [];
  }

  walk() {
    let dir = this.bias ? this.randomBiasDirection() : this.randomDirection();
    switch (dir) {
      case this.UP:
        this.y -= 1;
        break;
      case this.DOWN:
        this.y += 1;
        break;
      case this.LEFT:
        this.x -= 1;
        break;
      case this.RIGHT:
        this.x += 1;
        break;
    }
    this.history.push({ x: this.x, y: this.y });
  }

  randomDirection() {
    return floor(random(4)) % 4;
  }

  randomBiasDirection() {
    let rng = floor(random(100)) % 100;
    // Probabilities
    // Right 50%, Left 20%, Up 15%, Down 15%
    if (rng < 50) return this.RIGHT;
    if (rng < 70) return this.LEFT;
    if (rng < 85) return this.DOWN;
    return this.UP;
  }
}
