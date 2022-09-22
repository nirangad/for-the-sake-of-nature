class SmokeParticle extends Particle {
  constructor(position, velocity, acceleration) {
    super(position, velocity, acceleration);
    this.img = loadImage(
      "http://localhost:5500/4.9/ImageTextureParticleSystem/images/fire20x20.png"
    );
  }

  setRect(_isRect) {
    this.isRect = false;
  }

  show() {
    if (this.isDead()) return;

    // let withAlpha = this.lifespan.toString(16);
    // if (withAlpha.length == 1) {
    //   withAlpha = `0${withAlpha}`;
    // }
    // withAlpha = `${this.fillColor}${withAlpha}`;

    push();
    blendMode(ADD);
    tint(255, this.lifespan);
    image(this.img, this.position.x, this.position.y, 20, 20);
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }

  kill() {
    this.lifespan = 0;
  }
}
