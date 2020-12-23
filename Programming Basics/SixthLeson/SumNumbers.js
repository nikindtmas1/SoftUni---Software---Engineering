function sumNumber(input) {
    let curentData = input.shift();
    let sum = 0;
    while (curentData != 'Stop') {
        sum += Number(curentData);
        curentData = input.shift();
    }
    console.log(sum);
}
//sumNumber(['10', '20', '30', '45', 'Stop', '67','89']);

function sumNumbers(input) {
    let comand = false;
    let sumNum = 0;

    while (comand == false) {
        let num = input.shift();
        if (num == 'Stop') {
            comand = true;
            break;
        } else {
            num = Number(num);
            sumNum += num;
        }

    }
    console.log(`${sumNum}`);
}
sumNumbers([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'Stop']);