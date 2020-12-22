function sumWords(str, arg1, arg2) {
    let productName = str.toLowerCase();
    let controlValue = Number(arg1);
    let budget = Number(arg2);

    sumVowel = 0;
    sumConsunant = 0;
    for (let i = 0; i < productName.length; i++) {
        switch (productName[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                sumVowel = sumVowel + 3;
                break;
            default:
                sumConsunant = sumConsunant + 1;
                break;

        }

        productPrice = (sumVowel + sumConsunant) * controlValue;
        leftMoney = budget - productPrice;

    }
    if (productPrice > budget) {
        console.log(`Cannot buy ${productName}. Product value: ${productPrice.toFixed(2)}`);
    } else {
        console.log(`${productName} bought. Money left: ${leftMoney.toFixed(2)}`);
    }

}
sumWords('apple', '2', '20');