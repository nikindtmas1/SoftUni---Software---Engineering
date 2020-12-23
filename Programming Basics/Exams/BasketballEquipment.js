function basketballEquip(input) {
    let yearTax = Number(input.shift());

    let sneakers = yearTax - (yearTax * 0.4);
    let equipment = sneakers - (sneakers * 0.2);
    let basketball = equipment / 4;
    let accessories = basketball / 5;

    let totalSum = (yearTax + sneakers + equipment + basketball + accessories).toFixed(2);

    console.log(`${totalSum}`);

}
basketballEquip([ '230', '' ]);