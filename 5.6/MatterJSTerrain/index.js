let color1, color2, color3;
let boxes, world, ground;
let mousePressed = false;
let vertices = [];

function init() {
  vertices = [];
  world = new MatterWorld();

  vertices = [
    { x: 0, y: 70 },
    { x: 20, y: 60 },
    { x: 40, y: 70 },
    { x: 50, y: 0 },
  ];

  ground = world.Bodies.fromVertices(50, 50, vertices, { isStatic: true });

  world.addBody(ground);
  world.run();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
