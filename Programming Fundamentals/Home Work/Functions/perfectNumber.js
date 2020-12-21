function perfectNumber(number) {

    let isPerfect = resultPerfectNumber(number);

    let v1 = isPerfectNumber(isPerfect);

    let v2 = notPerfectNumber(isPerfect);

    if (v1) {

        console.log('We have a perfect number!');
    }

    if (v2) {

        console.log("It's not so perfect.");

    }

    function resultPerfectNumber() {

        let output = 0;

        for (let i = 1; i <= number / 2; i++) {

            if (number % i === 0) {

                output += i;
            }
        }
        return output;
    }

    function isPerfectNumber() {

        let isOk = false;
        let n = resultPerfectNumber(number)

        if(n === number &&  n !== 0){

            isOk = true;
        }
        
        return isOk;

    }

    function notPerfectNumber() {

        let isOk = false;
        let n = resultPerfectNumber(number);

        if(n !== number){

            isOk = true;
        }

        return isOk; 


    }
}