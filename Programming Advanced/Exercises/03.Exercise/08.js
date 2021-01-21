function rectangle(width, height, color) {

    function calcArea() {
        return this.width * this.height;
    }
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());