class Ant extends Agent {
  constructor(location, velocity, maxSpeed, maxForce, mass, path, radius) {
    super(location, velocity, maxSpeed, maxForce, mass, path);

    this.radius = radius;
  }

  run(alignWith, debugging = false) {
    this.debugging = debugging;
    this.alignWith = alignWith;
    this.steer();
    this.update();
    this.show();

    if (this.location.x > width || this.location.x < 0) {
      this.location.x = abs(this.location.x - width);
    }
    if (this.location.y > height || this.location.y < 0) {
      this.location.y = abs(this.location.y - height);
    }
  }

  steer() {
    let towards = this.follow();
    let futureLocation = this.location.copy();
    let alignTarget = p5.Vector.sub(
      towards.normalize(),
      futureLocation.normalize()
    );

    alignTarget.normalize(this.maxSpeed);

    let steer = p5.Vector.sub(alignTarget, this.velocity);
    steer.normalize().mult(this.maxForce);
    this.applyForce(steer);
  }

  follow() {
    if (!this.alignWith) {
      return p5.Vector.add(
        p5.Vector.add(this.location, this.velocity),
        this.path
      );
    }

    let alignLocation = p5.Vector.add(
      this.alignWith.location,
      this.alignWith.velocity.mult(5)
    );

    let futureLocation = p5.Vector.add(this.location, this.velocity.mult(3));
    let distance = alignLocation.dist(futureLocation);

    let towards;
    let colorDist = "#DF2935";

    if (distance * 4 > this.radius + this.alignWith.radius) {
      towards = p5.Vector.sub(alignLocation, futureLocation);
    } else {
      colorDist = "#7DDF64";
      towards = this.path;
    }

    push();
    stroke(colorDist);
    line(this.location.x, this.location.y, alignLocation.x, alignLocation.y);
    pop();
    return towards;
  }

  show() {
    let color1 = "#a9fbd7";
    let color2 = "#048a81";
    let color3 = "#FDCA4011";
    let color4 = "#FDCA40";

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    fill(color3);
    stroke(color4);
    scale(0.5);

    ellipse(0, 0, this.radius * 2, this.radius * 2);

    fill(color1);
    stroke(color2);
    let len = (80 * this.velocity.mag()) / this.maxSpeed;
    circle(0, 0, 40);
    strokeWeight(5);
    line(0, 0, len, 0);

    pop();
  }
}
