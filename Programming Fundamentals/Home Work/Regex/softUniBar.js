function softUniBar(input){

    let total = 0;

    let line = input.shift();

    while(line != 'end of shift'){

        //let regex = /%(?<customer>[A-Z][a-z]+)%([a-z]+)?<(?<product>[A-Z][a-z]+)>([a-z]+)?\|(?<count>\d+)\|([a-z]+)?(?<price>[\d]+(\.[\d]+)?)\$/g;

        let regex = /%(?<customer>[A-Z][a-z]+)%([^\%\|\.\&]+)?<(?<product>\w+)>([^\%\|\.\&]+)?\|(?<count>[0-9]+)\|([^\%\|\.\&\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g
        
        let match = regex.exec(line);

        if(match != null){

            total += (Number(match.groups.price) * Number(match.groups.count));

            console.log(`${match.groups.customer}: ${match.groups.product} - ${(match.groups.price * match.groups.count).toFixed(2)}`);
        }

        line = input.shift();
    }


    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBar([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);