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
      // this.setDirections();
      this.setDirectionsPerlinNoise();
    }
  }

  getDirection(x, y) {
    let row = parseInt(y / this.cellHeight);
    let col = parseInt(x / this.cellWidth);

    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      return this.directions[row][col];
    }

    return null;
  }

  setDirectionsPerlinNoise() {
    let noiseScale = 0.02;
    this.directions = [];
    for (let row = 0; row < this.rows; row++) {
      this.directions[row] = [];
      for (let col = 0; col < this.cols; col++) {
        let noiseVal = noise(col * noiseScale, row * noiseScale);
        this.directions[row][col] = p5.Vector.fromAngle(2 * PI * noiseVal);
      }
    }
  }

  setDirections() {
    this.directions = [];
    for (let row = 0; row < this.rows; row++) {
      this.directions[row] = [];
      for (let col = 0; col < this.cols; col++) {
        let dir = createVector(
          pow(col, random(-3, 5)) + 1,
          pow(row, random(-3, 5)) + 1
        );
        dir.normalize();
        this.directions[row][col] = dir;
      }
    }
  }

  display(showGrid = true, showText = true, showDirection = true) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        push();
        noFill();
        stroke("#bfc0c0");
        strokeWeight(1);
        let x = col * this.cellWidth;
        let y = row * this.cellHeight;
        translate(x, y);
        if (showGrid) {
          rect(0, 0, this.cellWidth, this.cellHeight);
        }

        if (showText) {
          textSize(10);
          fill(0);
          if (row == 0) {
            text(`${col}`, 10, 10);
          }
          if (col == 0) {
            text(`${row}`, 10, 10);
          }
        }

        if (showDirection) {
          translate(this.cellWidth / 2, this.cellHeight / 2);
          stroke("#c9ada1");
          strokeWeight(1);
          let base = createVector(1, 0);
          let ang = base.angleBetween(this.directions[row][col]);
          rotate(ang);
          line(-this.cellWidth / 2, 0, this.cellWidth / 2, 0);
        }

        pop();
      }
    }
  }
}
