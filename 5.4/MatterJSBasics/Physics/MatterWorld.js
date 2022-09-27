class MatterWorld {
  constructor() {
    this.Engine = Matter.Engine;
    this.Render = Matter.Render;
    this.Runner = Matter.Runner;
    this.Bodies = Matter.Bodies;
    this.Composite = Matter.Composite;

    this.engine = this.Engine.create();

    this.render = this.Render.create({
      element: document.body,
      engine: this.engine,
    });
  }

  addBody(body) {
    this.addBodies([body]);
  }

  addBodies(bodies) {
    this.Composite.add(this.engine.world, bodies);
  }

  run() {
    this.Render.run(this.render);
    let runner = this.Runner.create();
    this.Runner.run(runner, this.engine);
  }
}
