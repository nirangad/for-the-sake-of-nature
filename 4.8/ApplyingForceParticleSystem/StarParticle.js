class StarParticle extends Particle {
  constructor(position, velocity, acceleration) {
    super(position, velocity, acceleration);
  }

  setRect(_isRect) {
    this.isRect = false;
  }

  show() {
    if (this.isDead()) return;

    let alpha = this.lifespan.toString(16);
    if (alpha.length == 1) {
      alpha = `0${alpha}`;
    }

    push();
    fill(`${this.fillColor}${alpha}`);
    stroke(`${this.strokeColor}${alpha}`);
    this.star(
      this.position.x,
      this.position.y,
      this.weight * 10,
      this.weight * 5,
      5
    );
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }

  kill() {
    this.lifespan = 0;
  }

  star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
