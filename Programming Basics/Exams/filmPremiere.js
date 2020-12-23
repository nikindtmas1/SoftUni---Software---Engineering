function filmPremiere(input) {
    let nameFilme = input.shift();
    let filmPackege = input.shift();
    let countTickets = Number(input.shift());

    let currentPriceFilm = 0;

    if (nameFilme == 'John Wick') {
        switch (filmPackege) {
            case 'Drink': currentPriceFilm = 12;
                break;
            case 'Popcorn': currentPriceFilm = 15;
                break;
            case 'Menu': currentPriceFilm = 19;
                break;
        }
    } else if (nameFilme == 'Star Wars') {
        switch (filmPackege) {
            case 'Drink': currentPriceFilm = 18;
                if (countTickets >= 4) {
                    currentPriceFilm -= currentPriceFilm * 0.30;
                }
                break;
            case 'Popcorn': currentPriceFilm = 25;
                if (countTickets >= 4) {
                    currentPriceFilm -= currentPriceFilm * 0.30;
                }
                break;
            case 'Menu': currentPriceFilm = 30;
                if (countTickets >= 4) {
                    currentPriceFilm -= currentPriceFilm * 0.30;
                }
                break;
        }
    } else if (nameFilme == 'Jumanji') {
        switch (filmPackege) {
            case 'Drink': currentPriceFilm = 9;
                if (countTickets == 2) {
                    currentPriceFilm -= currentPriceFilm * 0.15;
                }
                break;
            case 'Popcorn': currentPriceFilm = 11;
                if (countTickets == 2) {
                    currentPriceFilm -= currentPriceFilm * 0.15;
                }
                break;
            case 'Menu': currentPriceFilm = 14;
                if (countTickets == 2) {
                    currentPriceFilm -= currentPriceFilm * 0.15;
                }
                break;
        }
    }
    let totalPriceFilm = countTickets * currentPriceFilm;
    console.log(`Your bill is ${totalPriceFilm.toFixed(2)} leva.`);
}
filmPremiere([ 'Jumanji', 'Menu', '3' ]);