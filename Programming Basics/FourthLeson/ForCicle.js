function nuberOneToN() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
//nuberOneToN();

function numberNTo1(n) {
    let number = Number(n);

    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
//numberNTo1("11");
function numberOneToN3(number) {
    let n = Number(number);


    for (let i = 1; i <= n; i += 3) {

        console.log(i);

    }
}
//numberOneToN3("12");

function numberStepen(number) {
    let n = Number(number);
    let num = 1;

    for (let i = 0; i <= n; i += 2) {

        console.log(num);
        num = num * 2 * 2;
    }
}
   //numberStepen("3");

   function numberStepen(number) {
    let n = Number(number);
  

    for (let i = 0; i <= n; i += 2) {

        console.log(Math.pow(2,i));// друг вариант 2 ** i
       
    }
}
//numberStepen("3");

function charSequince(str) {
    let text = str;
    let lenght = text.length;
    console.log(lenght);
}
   //charSequince('SoftUni');
function wordNumber(str) {
    let text = str;
    let letter = text[6];
    console.log(letter);

}
//wordNumber('SoftUni');

function characterSequence(input){
    
    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
    }

}
characterSequence('SoftUni');