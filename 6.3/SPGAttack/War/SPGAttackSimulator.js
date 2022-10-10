class SPGAttackSimulator {
  constructor() {
    this.tank = new Tank();
    this.spg = new SPG(createVector(width / 2, 50));
  }

  update() {
    this.tank.applyForce(createVector(10, 0));
  }

  show() {
    this.tank.show();
    this.spg.show();
  }
}
