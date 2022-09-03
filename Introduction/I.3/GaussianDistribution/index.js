let gRandom;
let mean;
let stdDev;
let color1, color2;

function setup() {
  color1 = "#4E6766";
  color2 = "#F7DD7211";

  createCanvas(500, 500);
  background(color1);

  mean = width / 2;
  stdDev = mean / 5;
}

function draw() {
  gRandom = randomGaussian();
  gRandom *= stdDev;
  gRandom += mean;

  noStroke();
  fill(color2);
  ellipse(gRandom, height / 2, 20, 20);
  ellipse(width / 2, gRandom, 20, 20);
}
