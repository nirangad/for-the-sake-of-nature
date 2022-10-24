class LinePathDesire extends Desire {
  constructor(path, radius) {
    super();
    this.path = path;
    this.radius = radius;

    this.pathVector = p5.Vector.sub(path[1], path[0]);
    this.pathVectorNormal = this.pathVector.copy().normalize();
  }

  calculateDesire(cVelocity, cLocation) {
    let fLocation = p5.Vector.add(cLocation, cVelocity);
    let fVLocation = p5.Vector.sub(fLocation, this.path[0]);

    let scaler = this.pathVectorNormal.dot(fVLocation);
    let scalerProjection = this.pathVectorNormal.copy().mult(scaler);
    let scalePoint = p5.Vector.add(scalerProjection, this.path[0]);

    if (scalePoint.dist(fLocation) <= this.radius) {
      return createVector(0, 0);
    }

    let newVelocity = p5.Vector.sub(scalePoint, cVelocity);

    return newVelocity;
  }

  updateDesire({ path, radius }) {
    this.path = path;
    this.radius = radius;
  }

  show() {
    push();
    stroke("#c46d5e");
    strokeWeight(this.radius);
    line(this.path[0].x, this.path[0].y, this.path[1].x, this.path[1].y);
    pop();
  }
}
