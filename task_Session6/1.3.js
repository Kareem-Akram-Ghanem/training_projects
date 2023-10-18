class Rectangle {
  #length = 1.0;
  #width = 1.0;

  constructor(l, w) {
    this.#length = l;
    this.#width = w;
  }

  getLength() {
    return this.#length;
  }

  setLength(l) {
    this.#length = l;
  }

  getWidth() {
    return this.#width;
  }

  setWidth(w) {
    this.#width = w;
  }

  getArea() {
    return this.#length * this.#width;
  }

  getPerimeter() {
    return 2 * (this.#length + this.#width);
  }

  toString() {
    return `This Rectangle have Length equal ${this.getLength()}, Width equal ${this.getWidth()}, Area equal ${this.getArea()} and Perimeter equal ${this.getPerimeter()}`;
  }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle);

// Length
console.log(rectangle.getLength());
rectangle.setLength(5);
console.log(rectangle.getLength());

// Width
console.log(rectangle.getWidth());
rectangle.setWidth(10);
console.log(rectangle.getWidth());

// Area
console.log(rectangle.getArea());

// Circumference
console.log(rectangle.getPerimeter());

// To String
console.log(rectangle.toString());
