class Vehicle extends Agent {
  constructor(
    { location, velocity, angle, maxSpeed, maxForce, desire },
    options = {}
  ) {
    super({ location, velocity, angle, maxSpeed, maxForce, desire }, options);
  }

  show() {
    color1 = "#1d3461";
    color2 = "#829cbc";
    color3 = "#376996";
    color4 = "#f7b538";

    let a = createVector(20, 0);
    let b = createVector(-10, 10);
    let c = createVector(-10, -10);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    fill(color2);
    stroke(color3);
    triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    pop();
  }
}
