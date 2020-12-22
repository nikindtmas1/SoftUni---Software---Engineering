function yardGreening(arg){
let yards = Number(arg);

let price = (yards) * 7.61;
let discount = (price) * 0.18;
let finalPrice = (price) - (discount);

console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}
yardGreening("540");