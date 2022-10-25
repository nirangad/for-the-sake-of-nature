class Car {
  constructor(location, velocity, maxSpeed, maxForce, mass, path) {
    this.location = location;
    this.velocity = velocity || createVector(2, 0);
    this.acceleration = createVector(0, 0);

    this.angle = this.velocity.heading();

    this.maxSpeed = maxSpeed || 4;
    this.maxForce = maxForce || 1;

    this.mass = mass || 1;
    this.path = path;
  }

  run() {
    this.steer();
    this.update();
    this.show();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.angle = this.velocity.heading();
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    force.limit(this.maxForce);
    this.acceleration = force.div(this.mass);
    this.update();
  }

  steer() {
    let towards = this.follow();
    let target = p5.Vector.sub(towards, this.location);
    if (target.mag() == 0) return;

    target.normalize().mult(this.maxSpeed);

    let steer = p5.Vector.sub(target, this.velocity);
    this.applyForce(steer);
  }

  follow() {
    let towards = this.path.closest(this.location);
    return towards;
  }

  show() {
    let color1 = "#829cbc";
    let color2 = "#376996";

    let a = createVector(20, 0);
    let b = createVector(-10, 10);
    let c = createVector(-10, -10);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    fill(color1);
    stroke(color2);
    scale(0.5);

    triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    pop();
  }
}
