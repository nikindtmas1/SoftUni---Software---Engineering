function cinemaTickets(input) {
    let filmName = input.shift();
    let numTickets = Number(input.shift());

    let typeTickets = input.shift();
    
    let saleTickets = 0;
    let typeStandard = 0;
    let typeStudent = 0;
    let typeKids = 0;
    let totalStandard = 0;
    let totalStudent = 0;
    let totalKids = 0;

    while (filmName != 'Finish') {
        while (saleTickets < numTickets && typeTickets != 'End') {
            switch (typeTickets) {
                case 'standard': typeStandard++; totalStandard++; saleTickets++;
                    if (saleTickets < numTickets)
                        typeTickets = input.shift();
                    break;
                case 'student': typeStudent++; totalStudent++; saleTickets++;
                    if (saleTickets < numTickets)
                        typeTickets = input.shift();
                    break;
                case 'kid': typeKids++; totalKids++; saleTickets++;
                    if (saleTickets < numTickets)
                        typeTickets = input.shift();
                    break;
            }

        }
        let sumTickets = typeStandard + typeStudent + typeKids;
        let procent = ((sumTickets / numTickets) * 100).toFixed(2);
        
        console.log(`${filmName} - ${procent}% full.`);

        typeStandard = 0;
        typeStudent = 0;
        typeKids = 0;
        saleTickets = 0;

        filmName = input.shift();
        numTickets = Number(input.shift());
        typeTickets = input.shift();
    }
    let totalTickets = totalStandard + totalStudent + totalKids;
    let totalProcentStudent = (totalStudent / totalTickets) * 100;
    let totalProcentStand = (totalStandard / totalTickets) * 100;
    let totalProcentKids = (totalKids / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${totalProcentStudent.toFixed(2)}% student tickets.`);
    console.log(`${totalProcentStand.toFixed(2)}% standard tickets.`);
    console.log(`${totalProcentKids.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]);