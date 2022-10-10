class Tank extends Mover {
  constructor(mass = 1) {
    super(createVector(0, 500), mass);
    this.image = loadImage("War/images/gtank.png");
    this.imageWidth = 50;
    this.imageHeight = 28;
    this.limitVelocity(2);
  }

  show() {
    push();
    image(
      this.image,
      this.location.x - this.imageWidth / 2,
      this.location.y - this.imageHeight / 2
    );
    pop();
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

  reset() {
    this.location = createVector(0, 500);
  }
}
