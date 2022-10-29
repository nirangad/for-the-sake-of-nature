class Ant extends Agent {
  constructor(location, velocity, maxSpeed, maxForce, mass, path) {
    super(location, velocity, maxSpeed, maxForce, mass, path);
  }

  run(debugging = false) {
    this.debugging = debugging;
    this.steer();
    this.update();
    this.show();

    if (this.location.x > width) {
      this.location.x = this.location.x - width;
    }
    if (this.location.y > height) {
      this.location.y = this.location.y - height;
    }
  }

  steer() {
    let towards = this.follow();
    let target = p5.Vector.sub(
      towards.copy(),
      p5.Vector.add(this.location, this.velocity.mult(3))
    );
  }

  follow() {
    return createVector(mouseX, mouseY);
  }

  show() {
    let color1 = "#a9fbd7";
    let color2 = "#048a81";

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    fill(color1);
    stroke(color2);
    scale(0.5);

    let len = (80 * this.velocity.mag()) / this.maxSpeed;
    circle(0, 0, 40);
    strokeWeight(5);
    line(0, 0, len, 0);
    pop();
  }
}
