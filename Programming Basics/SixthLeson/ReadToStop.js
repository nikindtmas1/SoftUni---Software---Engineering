function text(input) {
    let curentWord = input.shift();
    while (curentWord != 'Stop') {
        console.log(curentWord);
        curentWord = input.shift();
    }
}
//text(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomText', 'Stop']);
    
function textTwo(input) {
    let comand = false;
    while (comand == false) {
        let words = input.shift();
        console.log(words);
        if (words == 'Stop') {
            comand = true;
            break;
        }
    }
}
textTwo([
    'Nakov',
    'SoftUni',
    'Sofia',
    'Bulgaria',
    'SomeText',
    'Stop']);