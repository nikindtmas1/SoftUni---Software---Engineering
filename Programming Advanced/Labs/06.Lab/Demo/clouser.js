function outside(){
let name = 'Pesho';
let age = 30;

   return function inside(){
    let inerName = 'Gosho';

        console.log(name);

    }
}

let resultOutside = outside();

console.log(resultOutside());