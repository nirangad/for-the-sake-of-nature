class DangerZoneDesire extends Desire {
  constructor(position, boundary, thickness = 20) {
    super();
    this.position = position;
    this.boundary = boundary;
    this.thickness = thickness;
    this.innerBoundary = {
      width: boundary.width - 2 * this.thickness,
      height: boundary.height - 2 * this.thickness,
    };
  }

  calculateDesire(current) {
    let targetSpeed = this.target.copy();
    targetSpeed.sub(current);
    return targetSpeed;
  }

  updateDesire({ boundary, thickness }) {
    this.boundary = boundary;
    this.thickness = thickness;
  }

  desireSatisfied(current) {
    //return false;
    thi;
    return this.target.dist(current) <= this.radius;
  }

  toTaregtDesireProgress(current) {
    let distance = this.target.dist(current);
    if (distance >= this.radius) {
      return 1;
    }

    return distance / this.radius;
  }
}
