let color1, color2, color3;
let boxes, world;
let mousePressed = false;
let vertices = [];

function init() {
  vertices = [];
  world = new MatterWorld();

  let gfloor = world.Bodies.rectangle(125, 580, 1550, 150, {
    isStatic: true,
  });

  world.addBody(gfloor);
  world.run();
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  document.addEventListener("mousedown", (event) => {
    let ball = world.Bodies.circle(event.clientX, event.clientY, 20);
    world.addBody(ball);
  });
});
