class MoveToDesire extends Desire {
  constructor(target) {
    super();
    this.target = target;
  }

  calculateDesire(current) {
    let targetSpeed = this.target.copy();
    targetSpeed.sub(current);
    return targetSpeed;
  }

  updateDesire({ target }) {
    this.target = target;
  }
}
