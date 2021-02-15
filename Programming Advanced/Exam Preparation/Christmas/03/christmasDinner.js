class ChristmasDinner {
  constructor(budget){
    this.budget = budget;
    if(this.budget < 0){
        throw new Error(`The budget cannot be a negative number`);
    }
    this.dishes = [];
    this.products = [];
    this.guests  = {};
  }

shopping(product){
    if(this.budget < product[1]){
        throw new Error('Not enough money to buy this product');
    }else{
        this.budget -= product[1];
        this.products.push(product[0]);
        return `You have successfully bought ${product[0]}!`
    }
}

recipes(recipe){
let recipeName = recipe.recipeName;
let neededProd = recipe.productsList;
let isOk = true;
let notProd = '';
for (let index = 0; index < neededProd.length; index++) {
    if(!this.products.includes(neededProd[index])){
        notProd = neededProd[index];
        isOk = false;
        break;
    }
}

if(isOk){
    this.dishes.push({[recipeName]:neededProd});
    return `${recipeName} has been successfully cooked!`;
}else{
    throw new Error(`We do not have this product`)
}

}

inviteGuests(name, dish){

    if(!this.dishes.find((x) => x.hasOwnProperty(dish))){
        throw new Error(`We do not have this dish`);
    }

    if(this.guests.hasOwnProperty(name)){
        throw new Error(`This guest has already been invited`);
    }

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`
}

showAttendance(){
let result = [];

Object.entries(this.guests).forEach(line => {
    let dishType = line[1]
     //result.push(`${line[0]} will eat ${line[1]}`);
    for (let i = 0; i < this.dishes.length; i++) {
     let entries = Object.entries(this.dishes[i])
     //let curr = entries[0][0];
       if(entries[0][0] === dishType){
           result.push(`${line[0]} will eat ${line[1]}, which consists of ${entries[0][1].join(', ')}`);
       }
    }
});

return result.join('\n');
}


}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
