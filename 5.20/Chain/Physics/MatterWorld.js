class MatterWorld {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.Engine = Matter.Engine;
    this.Runner = Matter.Runner;
    this.Bodies = Matter.Bodies;
    this.Body = Matter.Body;
    this.Composite = Matter.Composite;
    this.Constraint = Matter.Constraint;
    this.Mouse = Matter.Mouse;
    this.MouseConstraint = Matter.MouseConstraint;
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

  removeBody(body) {
    this.removeBodies([body]);
  }

  removeBodies(bodies) {
    this.Composite.remove(this.engine.world, bodies);
  }

  addConstraint(constraint) {
    this.addBodies([constraint]);
  }

  addConstraints(constraints) {
    this.addBodies(constraints);
  }

  run() {
    this.Engine.run(this.engine);
  }
}
