class LinePathDesire extends Desire {
  constructor(path, radius) {
    super();
    this.path = path;
    this.radius = radius;

    this.pathVector = p5.Vector.fromAngle(
      atan((path[1].y - path[0].y) / (path[1].x - path[0].x))
    );
    // let mag = sqrt(
    //   pow(path[1].y - path[0].y, 2) + pow(path[1].x - path[0].x, 2)
    // );
    this.pathVector.normalize();
  }

  calculateDesire(cVelocity, cLocation) {
    let fLocation = cLocation.copy().add(cVelocity);
    // let fVLocation = p5.Vector.fromAngle(
    //   atan((fLocation.y - this.path[0].y) / (fLocation.x - this.path[0].x))
    // );

    // let angle = this.pathVector.angleBetween(fVLocation);
    // let fVLocationMag = fVLocation.mag();
    // let scalerMag = fVLocationMag * cos(angle);

    // let fVPredictedLocation = this.pathVector.copy().mult(scalerMag);

    // if (fVPredictedLocation.copy().sub(fVLocation).mag() <= this.radius) {
    //   return createVector(0, 0);
    // }

    // fVPredictedLocation.mult(1.01).sub(fVLocation);
    // return fVPredictedLocation;

    let dotProd = this.pathVector.dot(fLocation);
    // dot => this.pathVector.x * fLocation.x + this.pathVector.y * fLocation.y;
    let cosTheta = dotProd / (this.pathVector.mag() * fLocation.mag());
    let scalerMag = fLocation.mag() * cosTheta;
    let scalerProjection = this.pathVector.copy().mult(scalerMag);

    if (fLocation.copy().sub(scalerProjection).mag() <= this.radius) {
      return createVector(0, 0);
    }

    scalerProjection.mult(1.01);
    fLocation.sub(scalerProjection);

    return fLocation;
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
