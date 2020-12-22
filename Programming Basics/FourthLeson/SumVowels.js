function vowelSum(text) {
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'a': sum += 1;
                break;
            case 'e': sum += 2;
                break;
            case 'i': sum += 3;
                break;
            case 'o': sum += 4;
                break;
            case 'u': sum += 5;
                break;
            default:

                break;

        }

    }
    console.log(sum);
}
vowelSum('beer');
function wordCount(input){
sum = 0;
for(let i = 0; i < input.length; i++){
    switch(input[i]){
        case'a': sum++; break;
        case'e': sum++; break;
        case'i': sum++; break;
        case'o': sum++; break;
        case'u': sum++; break;
        case'y': sum++; break;
        default:
            break;
    }
}
console.log(sum);
}
//wordCount('In later texts such as the Services directive and most recently in the Audiovisual Media Services Directive a slightly different definition is games of chance involving a stake representing a sum of money, including lotteries, betting and other forms of gambling services');

function quantityWord(input){
let n = input;
sum = 0;
vowel = 0;
for(let i = 0; i < n.length; i++){
    sum++;
    switch(n[i]){
        case'a': 
        case'e': 
        case'i': 
        case'o': 
        case'u': 
        case'y':
        vowel++; 
        break; 
        default:
            break;
    }
}
console.log('Quantity words = ' + sum);
console.log('Quantity vowel = ' + vowel);
}
quantityWord('In later texts such as the Services directive and most recently in the Audiovisual Media Services Directive a slightly different definition is games of chance involving a stake representing a sum of money, including lotteries, betting and other forms of gambling services');