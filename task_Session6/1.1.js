class Circle {
  #radius;
  #color;

  constructor(r = 1.0, c = "red") {
    this.#radius = r;
    this.#color = c;
  }

  getRadius() {
    return this.#radius;
  }

  getColor() {
    return this.#color;
  }

  setRadius(r) {
    this.#radius = r;
  }

  setColor(c) {
    this.#color = c;
  }

  getArea() {
    return this.#radius * this.#radius * Math.PI;
  }

  toString() {
    return `This Circle have Radius equal ${this.#radius}, Color equal ${
      this.#color
    } and Area equal ${this.#radius * this.#radius * Math.PI}`;
  }
}

const circle1 = new Circle();
const circle2 = new Circle(5);
const circle3 = new Circle(10, "blue");

console.log(circle3);

// Radius
console.log(circle3.getRadius());
circle3.setRadius(15);
console.log(circle3.getRadius());

// Color
console.log(circle3.getColor());
circle3.setColor("black");
console.log(circle3.getColor());

// Area
console.log(circle3.getArea());

// To String
console.log(circle3.toString());
