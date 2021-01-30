function solve() {

    const recipes = {

        apple: {
            carbohidrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohidrate: 10,
            flavour: 20
        },

        burger: {
            carbohidrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }


    const stocs = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock: (microelement, quantity) => {
            stocs[microelement] += quantity
            return 'Success';
        },
        prepare: (product, quantity) => {
            let recipe = Object.entries(recipes[product]);

            for (const [item, coutNeeded] of recipe) {
                if (stocs[item] < coutNeeded * quantity) {
                    return `Error: not enough ${item} in stock`;
                }

            }
            recipe.forEach(([item, coutNeeded]) => {
                stocs[item] -= coutNeeded * quantity;
            });

            return 'Success';
        },

        report: () => 
            Object.entries(stocs)
            .map(([microelement, count]) => `${microelement}=${count}`)
            .join(" ")
        
    };

    return (input) => {
        let [command, item, count] = input.split(' ');
        return commands[command](item, +count);
    }
}

let manager = solve();
manager('restock flavour 50');
manager('prepare lemonade 4');
manager('report');


