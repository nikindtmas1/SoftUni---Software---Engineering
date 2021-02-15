let {describe} = require('mocha');
let {assert} = require('chai');

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


    describe("dealership", function() { 

            it("newCarCost", function() { 
                let carModel1 = 'Vw';
                let carModel2 = 'BMV';
                let carModel3 = 'Mercedes';
                let carModel4 = 'Audi A6 4K'; 
                let carPrice1 = 30000;
                let carPrice2 = 40000;
                let carPrice3 = 50000;
                
                assert.equal(dealership.newCarCost(carModel4,carPrice3), 30000);
                assert.equal(dealership.newCarCost(carModel2,carPrice3), 50000);

                assert.equal(dealership.newCarCost(carModel1,carPrice1), 30000);
                assert.equal(dealership.newCarCost(carModel3,carPrice2), 40000);
            }); 
        
            it('carEquipment', function() {
                let extrase = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
                let indexes1 = [0,3];
                let indexes2 = [1,2];
                let indexes3 = [2,3];

                assert.deepEqual(dealership.carEquipment(extrase,indexes1), ['heated seats', 'navigation']);
                assert.deepEqual(dealership.carEquipment(extrase,indexes2), ['sliding roof', 'sport rims']);
               
                assert.deepEqual(dealership.carEquipment(extrase,indexes3), ['sport rims', 'navigation']);
            
            });
       
            it('euroCategory', function(){
                assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`);
                assert.equal(dealership.euroCategory(2), `Your euro category is low, so there is no discount from the final price!`);
            });
        
    });