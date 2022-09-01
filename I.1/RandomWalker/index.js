let walker;

function setup() {
  createCanvas(500, 500);
  background(0);
  pixelDensity(1);

  walker = new Walker(width / 2, height / 2);
}

function draw() {
  background(0);
  walker.walk();
  displayWalker();
}

function displayWalker() {
  loadPixels();
  for (let i = 0; i < walker.history.length; i++) {
    let pix = (walker.history[i].x + walker.history[i].y * width) * 4;
    pixels[pix + 0] = 255;
    pixels[pix + 1] = 255;
    pixels[pix + 2] = 255;
    pixels[pix + 3] = 255;
  }
  updatePixels();
}
