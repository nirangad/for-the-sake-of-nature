class MatterWorld {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.Engine = Matter.Engine;
    this.Runner = Matter.Runner;
    this.Bodies = Matter.Bodies;
    this.Body = Matter.Body;
    this.Composite = Matter.Composite;
    this.Vertices = Matter.Vertices;
    this.World = Matter.World;

    this.engine = this.Engine.create();
    this.world = this.engine.world;
    this.bodies = this.world.bodies;
  }

  addBody(body) {
    this.addBodies([body]);
  }

  addBodies(bodies) {
    this.Composite.add(this.engine.world, bodies);
  }

  run() {
    this.Engine.run(this.engine);
  }
}
