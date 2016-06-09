/**
 * primitives
 */
const num = 55;
let nFloat = 456.897;
var message = 'hello world'; 
const nArray = [
  'elem1',
  'elem2'
];
const nObject = {
  key: 'value'
};

/**
 * functions
 */
const distance = function (a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
distance(10, 5);

function calcArea(width, height) {
  return width * height;
}
calcArea(10, 5);

/**
 * classes
 */
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  debug() {
    console.log(`${this.width}x${this.height}`);
  }
}

class Rectangle extends Polygon {
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);
