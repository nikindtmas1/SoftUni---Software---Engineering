

// let getRectArea = function(width, height){
//     return width * height;
//   };
  
//   console.log(getRectArea(3, 4));

    // hoisted(); // logs "foo"

    // function hoisted() {
    // console.log('foo');
    // }

    class Circle {

        constructor(radius) { this.radius = radius; }
        
        get diameter() { return 2 * this.radius; }
        
        set diameter(value) {
        
        this.radius = value / 2;
        
        }
        
        get area() {
        
        return Math.PI * (this.radius ** 2);
        
        }
        
        }
        
        let c = new Circle(2);
        
        c.diameter = 1.6;
        
        console.log(`Radius: ${c.radius}`); // 0.8
        
        console.log(`Diameter: ${c.diameter}`); // 1.6
        
        console.log(`Area: ${c.area}`); // 2.0106…