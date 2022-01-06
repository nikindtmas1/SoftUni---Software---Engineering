class Reqtangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
}

console.log(Reqtangle.name);

let ReqNamed = class Reqtangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
}

console.log(ReqNamed.name);

class RectangleOne {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }

  get circuit() {
    return this.calcCircuit();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }

  calcCircuit() {
    return ((this.height * 2) + (this.width * 2))
  }
}

const square = new RectangleOne(10, 10);
const squereTwo = new RectangleOne(10, 10);

console.log(square);
console.log(square.area); // 100
console.log(squereTwo.circuit); // 40