function celsiusToFahrenheit([arg1]){
let gradusCelsius = parseFloat(arg1);
let gardusFahrenheit = ((gradusCelsius * 1.8) + 32).toFixed(2);

console.log(gardusFahrenheit);
}
celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);
//More exercises

function celsiusToFahren(arg){
let cels = Number(arg);
let fahrenheit = (cels * 1.8) + 32;

console.log(fahrenheit.toFixed(2));
}
celsiusToFahren("32.3");