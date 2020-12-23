function primeNoPrime(input) {
    let num = input.shift();

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (num != "stop") {
        let counter = 0;
        let number = Number(num);
        if (number < 0) {
            console.log("Number is negative.");
            num = input.shift();
            continue;
        }
        for (let i = 2; i <= number; i++) {
            if (number % i == 0) {
                counter++;
            }
        }
        if (counter == 1) {
            sumPrime += number;
        }
        else {
            sumNonPrime += number;
        }
        num = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
primeNoPrime([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop'
  ]);