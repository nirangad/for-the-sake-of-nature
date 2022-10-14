class FlowField {
  constructor(cWidth, cHeight, rows, cols, directions = []) {
    this.canvasWidth = cWidth;
    this.canvasHeight = cHeight;
    this.rows = rows;
    this.cols = cols;
    this.cellWidth = this.canvasWidth / this.cols;
    this.cellHeight = this.canvasHeight / this.rows;
    this.directions = directions;

    if (directions.length != rows || directions[0].length != cols) {
      this.setDirections();
    }
  }

  getDirection(x, y) {
    let row = parseInt(x / this.cellWidth);
    let col = parseInt(y / this.cellHeight);

    if (row >= 0 && row < this.rows && col > 0 && col < this.cols) {
      return this.directions[row][col];
    }

    return null;
  }

  setDirections() {
    for (let row = 0; row < this.rows; row++) {
      this.directions[row] = [];
      for (let col = 0; col < this.cols; col++) {
        let dir = createVector(row, col);
        dir.normalize();
        this.directions[row][col] = dir;
      }
    }
    console.log(this.directions);
  }

  display() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        push();
        noFill();
        stroke("#bfc0c0");
        strokeWeight(1);
        let x = col * this.cellWidth;
        let y = row * this.cellHeight;
        rect(x, y, this.cellWidth, this.cellHeight);
        // text(`${row}, ${col}`, x + 10, y + 10);
        pop();
      }
    }
  }
}
