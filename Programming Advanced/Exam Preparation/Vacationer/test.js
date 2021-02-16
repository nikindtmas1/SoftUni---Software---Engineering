class Rectangle {

    constructor(height, width) {
    
    this.height = height;
    
    this.width = width;
    
    }
    
    // Method
    
    calcArea() { 
        return this.height * this.width; 
    }
    
    }
    
    const square1 = new Rectangle(10, 10);
    const square2 = new Rectangle(8, 5);
    const square3 = new Rectangle(6, 4);
    const square4 = new Rectangle(5, 2);
    const square5 = new Rectangle(12, 10);
    const square6 = new Rectangle(5, 10);
    console.log(square1);
    console.log(square2);
    console.log(square3);
    console.log(square4);
    console.log(square5);
    console.log(square6);
    
    console.log(square5.calcArea()); // 100