class SPG extends Mover {
  constructor(location, mass = 1) {
    super(location, mass);
    this.image = loadImage("War/images/spg.png");
    this.imageWidth = 60;
    this.imageHeight = 50;
    this.limitVelocity(1);
    this.cannon = null;
  }

  show() {
    push();
    image(
      this.image,
      this.location.x - this.imageWidth / 2,
      this.location.y - this.imageHeight / 2
    );
    if (this.cannon) {
      this.cannon.show();
    }
    pop();
  }

  changeLocation(location) {
    this.location = location;
  }

  fire(tank) {
    let bombLocation = this.location.copy();
    bombLocation.x += this.imageWidth / 2;
    bombLocation.y += this.imageHeight / 2;

    this.cannon = new Cannon(bombLocation, 1, false, false);
    this.cannon.launch(tank);
  }
}
