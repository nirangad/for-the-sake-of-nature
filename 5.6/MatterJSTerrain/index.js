let color1, color2, color3;
let boxes, world, ground;
let mousePressed = false;
let vertices = [];

function init() {
  vertices = [];
  world = new MatterWorld();

  vertices = [
    { x: 0, y: 0 },
    { x: 0, y: 5 },
    { x: 13, y: 5 },
    { x: 13, y: 1 },
    { x: 12, y: 0 },
    { x: 11, y: 1 },
    { x: 8, y: 2 },
    { x: 5, y: 1 },
    { x: 2, y: 1 },
    { x: 0, y: 0 },
  ];

  let factor = 50;
  vertices.forEach((coord) => {
    coord.x *= factor;
    coord.y *= factor;
  });

  ground = world.Bodies.fromVertices(150, 150, vertices, { isStatic: true });

  world.addBody(ground);
  world.run();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
