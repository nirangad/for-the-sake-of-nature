let color1, color2, color3;
let boxes, world;
let count = 0;
let shapes = 4;

function init() {
  boxes = [];
  world = new MatterWorld();
  let ground = world.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  world.addBodies([ground]);

  document.addEventListener("mouseup", (event) => {
    let body;
    if (count % shapes == 0) {
      body = world.Bodies.rectangle(event.clientX, event.clientY, 80, 80);
    } else if (count % shapes == 1) {
      body = world.Bodies.circle(event.clientX, event.clientY, 40);
    } else if (count % shapes == 2) {
      body = world.Bodies.fromVertices(event.clientX, event.clientY, [
        { x: 10, y: 10 },
        { x: 20, y: 10 },
        { x: 30, y: 20 },
        { x: 40, y: 30 },
        { x: 50, y: 30 },
        { x: 40, y: 50 },
        { x: 20, y: 60 },
        { x: 10, y: 30 },
      ]);
    } else if (count % shapes == 3) {
      body = world.Bodies.polygon(
        event.clientX,
        event.clientY,
        3 + (count % 10),
        40
      );
    }
    count++;

    world.addBody(body);
  });
  world.run();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
