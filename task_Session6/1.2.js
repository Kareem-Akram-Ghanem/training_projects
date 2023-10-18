class Circle {
  #radius;

  constructor(r = 1.0) {
    this.#radius = r;
  }

  getRadius() {
    return this.#radius;
  }

  setRadius(r) {
    this.#radius = r;
  }

  getArea() {
    return this.#radius * this.#radius * Math.PI;
  }

  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }

  toString() {
    return `This Circle have Radius equal ${this.#radius} and Area equal ${
      this.#radius * this.#radius * Math.PI
    }`;
  }
}

const circle1 = new Circle(10);

console.log(circle1);

// Radius
console.log(circle1.getRadius());
circle1.setRadius(15);
console.log(circle1.getRadius());

// Area
console.log(circle1.getArea());

// Circumference
console.log(circle1.getCircumference());

// To String
console.log(circle1.toString());
