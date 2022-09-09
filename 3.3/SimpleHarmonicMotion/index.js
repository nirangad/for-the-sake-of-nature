let color1, color2, color3;
let history;

let amplitude;
let period;

function setup() {
  color1 = "#011627";
  color2 = [255, 0, 34];

  createCanvas(500, 300);
  background(color1);

  history = [];
  amplitude = width / 2 - 50;
  period = 70;
}

function draw() {
  background(color1);
  translate(width / 2, height / 2);

  strokeWeight(8);
  stroke(color2[0], color2[1], color2[2], 120);
  fill(color2[0], color2[1], color2[2], 255);
  let position = amplitude * sin((frameCount * 2 * PI) / period);
  ellipse(position, 0, 20, 20);
  history.unshift(position);
  if (history.length > 10) {
    history.pop();
  }

  for (let i = 0; i < history.length; i++) {
    let diff1 = (i * 100) / history.length;
    let diff2 = (i * 120) / history.length;
    stroke(color2[0], color2[1], color2[2], 100 - diff1);
    fill(color2[0], color2[1], color2[2], 120 - diff2);
    ellipse(history[i], 0, 20, 20);
  }
}
