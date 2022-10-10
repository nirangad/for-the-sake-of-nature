class Cannon extends Mover {
  constructor(location, mass = 1, loopx = true, loopy = true) {
    super(location, mass, loopx, loopy);
    this.exploded = false;

    this.activeBomb = loadImage("War/images/cannon_ball.png");
    this.explodedBomb = loadImage("War/images/cannon_ball_blast.png");

    this.imageWidth = 60;
    this.imageHeight = 50;

    this.maxVelocity = 3;

    this.mover = null;

    this.limitVelocity(this.maxVelocity);
  }

  show() {
    if (!this.exploded) {
      this.update();
      this.updateStatus();
    }

    push();
    image(
      this.exploded ? this.explodedBomb : this.activeBomb,
      this.location.x - this.imageWidth / 2,
      this.location.y - this.imageHeight / 2
    );
    pop();
  }

  launch(mover) {
    this.mover = mover;
    this.applyForce(createVector(8, 14));
    this.update();
  }

  getBoundaries() {
    return [
      {
        x: this.location.x - this.imageWidth / 2,
        y: this.location.y - this.imageHeight / 2,
      },
      {
        x: this.location.x + this.imageWidth / 2,
        y: this.location.y - this.imageHeight / 2,
      },
      {
        x: this.location.x + this.imageWidth / 2,
        y: this.location.y + this.imageHeight / 2,
      },
      {
        x: this.location.x - this.imageWidth / 2,
        y: this.location.y + this.imageHeight / 2,
      },
    ];
  }

  getDimensions() {
    return { width: this.imageWidth, height: this.imageHeight };
  }

  overlapping(mover) {
    let isBigItem =
      this.imageWidth * this.imageHeight > mover.imageWidth * mover.imageHeight;

    let bigItem = isBigItem ? this : mover;
    let smallItem = !isBigItem ? this : mover;

    let bigItemBoundaries = bigItem.getBoundaries();
    let smallItemBoundaries = smallItem.getBoundaries();

    let tl = bigItemBoundaries[0];
    let tr = bigItemBoundaries[1];
    let br = bigItemBoundaries[2];

    for (let s = 0; s < smallItemBoundaries.length; s++) {
      let point = smallItemBoundaries[s];
      if (
        point.x >= tl.x + 20 &&
        point.x <= tr.x - 20 &&
        point.y >= tr.y + 20 &&
        point.y <= br.y - 20
      ) {
        return true;
      }
    }

    return false;
  }

  updateStatus() {
    if (this.outOfBounds()) {
      this.exploded = true;
      return;
    }

    if (this.mover) {
      if (this.overlapping(this.mover)) {
        this.exploded = true;
      }
    }
  }
}
