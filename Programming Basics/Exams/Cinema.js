function cinema(input) {
    let haveSeats = Number(input.shift());
    let countTickets = input.shift();

    let currentSeats = 0;
    let countarSeats = 0;
    let ticketPrice = 5;
    let sumTickets = 0;

    while (countTickets != 'Movie time!') {
        countTickets = Number(countTickets);
        countarSeats += countTickets;
        if (countarSeats <= haveSeats) {
            if (countTickets % 3 == 0) {
                sumTickets += (countTickets * ticketPrice) - 5;
                countTickets = input.shift();
            } else {
                sumTickets += countTickets * ticketPrice;;
                //countarSeats += countTickets;
                countTickets = input.shift();
            }
        } else {
            console.log(`The cinema is full.`);
            //console.log(`Cinema income - ${sumTickets} lv.`);
            break;
        }
    }
    if (countTickets == 'Movie time!') {
        let leftSeats = Math.abs(haveSeats - countarSeats);
        console.log(`There are ${leftSeats} seats left in the cinema.`);
        //console.log(`Cinema income - ${sumTickets} lv.`);

    }
    console.log(`Cinema income - ${sumTickets} lv.`);
}
cinema([
'50',
'15',
'10',
'10',
'15',
'5'
  ]);