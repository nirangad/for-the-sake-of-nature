let walker;
let biasWalker;

function setup() {
  createCanvas(500, 500);
  background(10);
  pixelDensity(1);

  walker = new Walker(width / 2, height / 2);
  biasWalker = new Walker(width / 2, height / 2, true);
}

function draw() {
  background(10);
  walker.walk();
  biasWalker.walk();
  displayWalker(walker, 217, 114, 255);
  displayWalker(biasWalker, 140, 255, 218);
}

function displayWalker(w, r, g, b) {
  loadPixels();
  for (let i = 0; i < w.history.length; i++) {
    let pix = (w.history[i].x + w.history[i].y * width) * 4;
    pixels[pix + 0] = r;
    pixels[pix + 1] = g;
    pixels[pix + 2] = b;
    pixels[pix + 3] = 255;
  }
  updatePixels();
}
