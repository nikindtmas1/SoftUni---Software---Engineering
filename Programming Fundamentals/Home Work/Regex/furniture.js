function furniture(input) {


    let result = `Bought furniture:\n`;
    let totalPrice = 0;

    let line = input.shift();

    while (line != 'Purchase') {

        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;

        let match = regex.exec(line)

        if (match) {

            let currantPrice = Number(match.groups.price)
                * Number(match.groups.quantity);

            totalPrice += currantPrice;

            result += match.groups.name + `\n`;

        }

        line = input.shift();
    }

    result += `Total money spend: ${totalPrice.toFixed(2)}`;

    console.log(result);

}

furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);