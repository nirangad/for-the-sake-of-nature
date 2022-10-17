class Vehicle extends Agent {
  constructor(
    { location, velocity, angle, maxSpeed, maxForce, desire },
    options = {}
  ) {
    super({ location, velocity, angle, maxSpeed, maxForce, desire }, options);
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
