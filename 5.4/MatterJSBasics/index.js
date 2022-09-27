let color1, color2, color3;
let boxes, world;

function init() {
  boxes = [];
  world = new MatterWorld();
  let boxA = world.Bodies.rectangle(400, 200, 80, 80);
  let boxB = world.Bodies.rectangle(450, 50, 80, 80);
  let ground = world.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  world.addBodies([boxA, boxB, ground]);

  document.addEventListener("mouseup", (event) => {
    let box = world.Bodies.rectangle(event.clientX, event.clientY, 80, 80);
    world.addBody(box);
  });
  world.run();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
