let {describe} = require('mocha');
let {assert} = require('chai');

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

    describe("PizzUni", function() {
        describe("makeAnOrder", function() {
    
            it("makeOrder", function() {
                let obj1 = {orderedPizza: 'pizza1'};
                let obj2 = {orderedPizza: 'pizza2', orderedDrink: 'drink'};
                let obj3 = {orderedDrink: 'drink'};
                let obj4 = {};
            
            assert.equal(pizzUni.makeAnOrder(obj1), `You just ordered ${obj1.orderedPizza}`);
            assert.equal(pizzUni.makeAnOrder(obj2), `You just ordered ${obj2.orderedPizza} and ${obj2.orderedDrink}.`);
            assert.throw(() => pizzUni.makeAnOrder(obj3), 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => pizzUni.makeAnOrder(obj4), 'You must order at least 1 Pizza to finish the order.');
        });
        });
    
        describe('getRemainingWork', function(){
            it('Remaining', function(){
                let status1 = [{pizzaName: 'pizza1', status: 'ready'},{pizzaName: 'pizza2', status: 'preparing'}, {pizzaName: 'pizza3', status: 'ready'}, {pizzaName: 'pizza4', status: 'preparing'}];
                let status2 = [{pizzaName: 'pizza1', status: 'ready'},{pizzaName: 'pizza2', status: 'ready'}, {pizzaName: 'pizza3', status: 'ready'}, {pizzaName: 'pizza4', status: 'ready'}];
                let status3 = [{pizzaName: 'pizza1', status: 'preparing'},{pizzaName: 'pizza2', status: 'preparing'}, {pizzaName: 'pizza3', status: 'preparing'}, {pizzaName: 'pizza4', status: 'preparing'}];

                assert.equal(pizzUni.getRemainingWork(status1), `The following pizzas are still preparing: pizza2, pizza4.`);
                assert.equal(pizzUni.getRemainingWork(status2), 'All orders are complete!');
                assert.equal(pizzUni.getRemainingWork(status3), `The following pizzas are still preparing: pizza1, pizza2, pizza3, pizza4.`);

            });
        });

        describe('orderType', function(){
            it('Types', function(){
                let totalSum = 100;
                let totalSum1 = -100;
                let totalSum2 = 0;

                let typeOrder1 = 'Carry Out';
                let typeOrder2 = 'Delivery';

                assert.equal(pizzUni.orderType(totalSum, typeOrder1), 90);
                assert.equal(pizzUni.orderType(totalSum,typeOrder2), 100);
               

                assert.equal(pizzUni.orderType(totalSum1, typeOrder1), -90);
                assert.equal(pizzUni.orderType(totalSum1, typeOrder2), -100);

                assert.equal(pizzUni.orderType(totalSum2, typeOrder1), 0);
                assert.equal(pizzUni.orderType(totalSum2, typeOrder2), 0);
            });
        });
    });