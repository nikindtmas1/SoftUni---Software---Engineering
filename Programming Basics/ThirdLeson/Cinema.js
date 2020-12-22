function cinema(type, rows, colums) {
    type = type.toLowerCase();
    rows = Number(rows);
    colums = Number(colums);

    let premiere = 12.00;
    let normal = 7.50;
    let discount = 5.00;

    let people = rows * colums;
    let sum = 0;

    switch (type) {
        case "premiere": sum = people * premiere; break;
        case "normal": sum = people * normal; break;
        case "discount": sum = people * discount; break;
    }
    console.log(`${sum.toFixed(2)} leva`);
}
cinema("Discount", "12", "30");