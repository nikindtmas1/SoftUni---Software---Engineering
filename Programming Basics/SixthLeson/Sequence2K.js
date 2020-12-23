function sequenceK(input) {
    let num = Number(input.shift());
    let k = 1;
    while (k <= num) {
        console.log(k);
        k = k * 2 + 1;
    }
}
//sequenceK(['7']);

function sequeK(input){
    let n = Number(input.shift());
    let h = 1;
    while(h <= n){
        console.log(h);
        h = h * 2 + 1;
    }

}
sequeK(['9']);