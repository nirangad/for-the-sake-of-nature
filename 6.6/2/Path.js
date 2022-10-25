class Path {
  constructor(r) {
    this.points = [];
    this.radius = r || 20;
  }

  addPoint(x, y) {
    this.points.push(createVector(x, y));
    this.points.sort((p1, p2) => {
      return p1.x - p2.x;
    });
  }

  show() {
    noFill();
    stroke("#3d314a");
    strokeWeight(this.radius);
    beginShape();
    this.points.forEach((point) => {
      vertex(point.x, point.y);
    });
    endShape();

    stroke("#ffffff");
    strokeWeight(1);
    beginShape();
    this.points.forEach((point) => {
      vertex(point.x, point.y);
    });
    endShape();
  }

  closest(m) {
    let shortest = null;
    for (let i = 0; i < this.points.length - 1; i++) {
      let p1 = this.points[i];
      let p2 = this.points[i + 1];

      let p12 = p5.Vector.sub(p2, p1);
      let p1m = p5.Vector.sub(m, p1);

      p12.normalize();
      let scaler = p1m.dot(p12);
      let scalerVector = p12.mult(scaler);
      let normalPoint = p5.Vector.add(scalerVector, p1);
      let distance = m.dist(normalPoint);

      if (!shortest || shortest.distance >= distance) {
        shortest = { p1, p2, distance, normalPoint };
        continue;
      }
    }
    return shortest.normalPoint;
  }
}
