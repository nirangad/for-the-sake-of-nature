class MoveToDesire extends Desire {
  constructor(target, radius) {
    super();
    this.target = target;
    this.radius = radius;
  }

  calculateDesire(current) {
    let targetSpeed = this.target.copy();
    targetSpeed.sub(current);
    return targetSpeed;
  }

  updateDesire({ target }) {
    this.target = target;
  }

  desireSatisfied(current) {
    //return false;
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
