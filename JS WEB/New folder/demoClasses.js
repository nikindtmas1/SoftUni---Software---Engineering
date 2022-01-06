//Classes are a template for creating objects.
//The class syntax has two components: class expressions and class declarations.

//class declaration

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

//Hoisting
//classes must be defined before they can be constructed.
//Code like the following will throw a ReferenceError:

const p = new Rectangle(); // ReferenceError
class Rectangle {}


//Class expressions
//Class expressions can be named or unnamed.

// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle2"


  //Public field declarations

  class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  //Private field declarations

  class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }

//The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.