const {describe} = require('mocha');
const {assert} = require('chai');

pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

    if (remainingArr.length > 0) {

        let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
        let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`
        
        return pizzasLeft;
    } else {
        return 'All orders are complete!'
    }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

describe("Tests …", function () {
    describe("makeOrder", function () {

        it("makeAnOrder", function () {
            let orderPizz1 = { orderedPizza: 'mafioso', orderedDrink: 'wine' }
            let orderPizz2 = { orderedPizza: 'mafioso' }
            let orderPizz3 = { orderedDrink: 'wine' }
            let orderPizz4 = {}

            assert.throw(() => pizzUni.makeAnOrder(orderPizz3), 'You must order at least 1 Pizza to finish the order.');
           assert.throw(() => pizzUni.makeAnOrder(orderPizz4), 'You must order at least 1 Pizza to finish the order.');

           assert.equal(pizzUni.makeAnOrder(orderPizz2), `You just ordered ${orderPizz2.orderedPizza}`);
            assert.equal(pizzUni.makeAnOrder(orderPizz1), `You just ordered ${orderPizz1.orderedPizza} and ${orderPizz1.orderedDrink}.`);
        });
    });

    describe('remaining', function () {
        it('getRemainingWork', function () {

            let arrStatus1 = [{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'ready' },
            { pizzaName: 'pizza3', status: 'ready' }, { pizzaName: 'pizza4', status: 'ready' }];

            let arrStatus2 = [{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'ready' },
            { pizzaName: 'pizza3', status: 'preparing' }, { pizzaName: 'pizza4', status: 'preparing' }];

            let arrStatus3 = [{ pizzaName: 'pizza1', status: 'preparing' }, { pizzaName: 'pizza2', status: 'preparing' },
            { pizzaName: 'pizza3', status: 'preparing' }, { pizzaName: 'pizza4', status: 'preparing' }];

            assert.equal(pizzUni.getRemainingWork(arrStatus1), `All orders are complete!`);
            assert.equal(pizzUni.getRemainingWork(arrStatus2), `The following pizzas are still preparing: pizza3, pizza4.`);
            assert.equal(pizzUni.getRemainingWork(arrStatus3), `The following pizzas are still preparing: pizza1, pizza2, pizza3, pizza4.`);
        });
    });

    describe('orders', function () {
        it('orderType', function () {
            let typeOrder1 = 'Carry Out';
            let typeOrder2 = 'Delivery';
            let totalSum = 100;
            let totalSum1 = -100;
            let totalSum2 = 0;

            assert.equal(pizzUni.orderType(totalSum, typeOrder1), 90);
            assert.equal(pizzUni.orderType(totalSum1, typeOrder1), -90);

            assert.equal(pizzUni.orderType(totalSum, typeOrder2), 100);
            assert.equal(pizzUni.orderType(totalSum1, typeOrder2), -100);

            assert.equal(pizzUni.orderType(totalSum2, typeOrder2), 0);
            assert.equal(pizzUni.orderType(totalSum2, typeOrder1), 0);


        });
    });
});
    
         

    