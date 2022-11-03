class Ball extends Agent {
  constructor(location, velocity, maxSpeed, maxForce, mass, path, radius) {
    super(location, velocity, maxSpeed, maxForce, mass, path);

    this.radius = radius;
  }

  run(debugging = false, balls) {
    this.steer(balls);
    this.update();
    this.show();

    let vDir = this.velocity.heading();
    if (abs(vDir) % (PI / 2) == 0) {
      this.location.y = abs(this.location.y - height);
    } else if (abs(vDir) % PI == 0) {
      this.location.x = abs(this.location.x - width);
    } else {
      if (vDir < 0) {
        vDir += 2 * PI;
      }
      let m = tan(vDir);
      if (this.location.y > height || this.location.y < 0) {
        let y = abs(this.location.y - height);
        let x = (y - this.location.y) / m + this.location.x;

        if (x > width || x < 0) {
          y = m * (abs(x - width) - x) + y;
          x = abs(x - width);
        }
        this.location.x = x;
        this.location.y = y;
      } else if (this.location.x > width || this.location.x < 0) {
        let x = abs(this.location.x - width);
        let y = m * (x - this.location.x) + this.location.y;

        if (y > height || y < 0) {
          x = (abs(y - height) - y) / m + x;
          y = abs(y - height);
        }
        this.location.x = x;
        this.location.y = y;
      }
    }
  }

  steer(balls) {
    let sum = createVector(0, 0);
    let count = 0;
    balls.forEach((ball) => {
      if (this.location.dist(ball.location) <= this.radius) {
        sum.add(ball.velocity);
        count++;
      }
    });
    if (count > 0) {
      sum.div(count);
    }

    let steer = p5.Vector.sub(sum, this.velocity);
    this.applyForce(steer);
  }

  follow() {
    // console.warn("Method not implemented: follow()");
  }

  show() {
    let color1 = "#110B11";
    let color2 = "#F2F4CB";

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    scale(0.5);

    fill(color1);
    stroke(color2);
    circle(0, 0, 40);

    pop();
  }
}
