class MatterWorld {
  constructor() {
    this.Engine = Matter.Engine;
    this.Render = Matter.Render;
    this.Runner = Matter.Runner;
    this.Bodies = Matter.Bodies;
    this.Body = Matter.Body;
    this.Composite = Matter.Composite;

    this.engine = this.Engine.create();

    this.render = this.Render.create({
      element: document.body,
      options: {
        width: window.innerWidth * 0.9,
        height: window.innerHeight / 2,
        wireframes: false,
      },
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
