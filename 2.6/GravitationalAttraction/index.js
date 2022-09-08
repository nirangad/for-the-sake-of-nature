let color1, color2, color3;
let planets;
let gravitationlConstant;

function setup() {
  color1 = "#292f36";
  color2 = "#bdc667";
  color3 = "#77966d";

  createCanvas(700, 500);

  background(color1);
  fill(color2);
  noStroke();

  gravitationlConstant = 1;

  let planetsCount = 15;
  planets = [];

  for (let i = 0; i < planetsCount; i++) {
    let position = createVector(
      random(50, width - 50),
      random(50, height - 50)
    );
    let mass = random(1, 5);
    planets[i] = new Planet(position, mass);
    planets[i].show();
  }
}

function draw() {
  background(color1);
  fill(color2);
  noStroke();

  for (let i = 0; i < planets.length; i++) {
    let planetI = planets[i];
    planetI.show();
    for (let j = 0; j < planets.length; j++) {
      if (i == j) continue;

      let planetJ = planets[j];
      let direction = planetI.position
        .copy()
        .sub(planetJ.position.copy())
        .normalize();
      let distance = planetI.position.dist(planetJ.position);
      if (distance < abs(planetI.size - planetJ.size) * 5) {
        continue;
      }
      let gForce =
        (gravitationlConstant * planetI.mass * planetJ.mass) /
        (distance * distance);

      planetI.applyForce(direction.mult(-gForce));
    }
  }
}
