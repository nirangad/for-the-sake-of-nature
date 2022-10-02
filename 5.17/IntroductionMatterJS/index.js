let color1, color2, color3;
let box, nob, world;

function setup() {
  color1 = "#605b56";
  color2 = "#f2fbe0";
  color3 = "#acc18a";

  createCanvas(700, 700);
  background(color1);

  world = new MatterWorld();

  // let gfloor = world.Bodies.rectangle(125, 580, 1550, 150, {
  //   isStatic: true,
  // });

  box = world.Bodies.rectangle(width / 2, 100, 100, 100);
  nob = world.Bodies.circle(width / 2, height / 2, 10, {
    isStatic: true,
  });
  console.log(box);

  world.addBody(box);
  world.addBody(nob);
  world.run();
}

function draw() {
  background(color1);

  fill(color2);
  stroke(color3);
  noStroke();
  strokeWeight(0);

  ellipse(nob.position.x, nob.position.y, 10);

  translate(box.position.x, box.position.y);
  rotate(box.angle);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
}
