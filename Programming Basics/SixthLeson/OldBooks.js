function oldBooks(input) {
    let searchBook = input.shift();
    let countBooks = Number(input.shift());
    let Book = input.shift();

    let currantSearch = 0;

    for (let i = 1; i <= countBooks; i++) {
        if (Book == searchBook) {
            console.log(`You checked ${currantSearch} books and found it.`);
            return;
        } else {
            currantSearch++;
            Book = input.shift();
        }
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${currantSearch} books.`);
}
oldBooks([
    'Bourne',     '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship',  'Strongest',
    'Profit',     'Tripple',
    'Stella',     'The Matrix',
    'Bourne'
  ]);