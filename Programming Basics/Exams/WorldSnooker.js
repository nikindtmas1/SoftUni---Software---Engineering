function worldSnooker(input) {
    let stage = input[0].toLowerCase();
    let ticketType = input[1].toLowerCase();
    let numTickets = Number(input[2]);
    let photo = input[3].toLowerCase();

    let ticketPrice = 0;

    if (stage == 'quarter final') {
        switch (ticketType) {
            case 'standard': ticketPrice = 55.50; break;
            case 'premium': ticketPrice = 105.20; break;
            case 'vip': ticketPrice = 118.90; break;
        }
    }
     if (stage == 'semi final') {
        switch (ticketType) {
            case 'standard': ticketPrice = 75.88; break;
            case 'premium': ticketPrice = 125.22; break;
            case 'vip': ticketPrice = 300.40; break;
        }
    }
     if (stage == 'final') {
        switch (ticketType) {
            case 'standard': ticketPrice = 110.10; break;
            case 'premium': ticketPrice = 160.66; break;
            case 'vip': ticketPrice = 400; break;
        }
    }
    let sum = numTickets * ticketPrice;

    if (sum > 4000) {
        sum -= sum * 0.25;
    } else if (sum > 2500) {
        if (photo == 'n') {
            sum -= sum * 0.10;
        } else if (photo == 'y') {
            sum = (sum - (sum * 0.10) + (40 * numTickets));
        }
    }else {
        if(photo == 'n'){
            sum = sum;
        }else if(photo == 'y'){
            sum = sum + (40 * numTickets);
        }
    }
    console.log(sum.toFixed(2));

}
worldSnooker([ 'Semi final', 'VIP', '9', 'Y' ]);
//if (photo == 'Y')