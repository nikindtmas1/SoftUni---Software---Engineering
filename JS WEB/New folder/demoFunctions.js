// closures function

function init() {
    const name = 'Mozilla'; // name is a local variable created by init

    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

//callback function
function running() {

    return "Running";

}

function category(run, type) {

    console.log(run() + " " + type);

}

category(running, "sprint");

//nested function

function hypotenuse(m, n) { // outer function

    function square(num) { // inner function

       return(num * num);

    }

    return(Math.sqrt(square(m) + square(n)));

}
hypotenuse(3, 4);

//Hoisting Functions
//!!!! Only function declaretion

run(); // running

function run() {

console.log("running");

};

//inheritance
//JavaScript objects are dynamic "bags" of properties (referred to as own properties)
function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log( doSomethingFromArrowFunction.prototype );

function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );

//fibonacci sequence
const number = 10
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}