const {assert} = require('chai');

PaymentPackage = class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');            
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');            
        }
        this._value = newValue;
    }
    
    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');            
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
};



try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));
const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}


describe('PaymentPackage test', function() {
    // let instance = undefined;
    // beforeEach(() => {
    //     instance = new PaymentPackage('Varna', 100)
    // });
    it('constructor', function() {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance._name, 'Name', '1');
        assert.equal(instance._value, 100, '2');
        assert.equal(instance._VAT, 20, '1');
        assert.equal(instance._active, true);
    });
    it('name', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.name, 'Name');

        instance.name = "Niki";

        assert.equal(instance.name, "Niki");
        assert.throw(() => {instance.name = ''}, 'Name must be a non-empty string');
        assert.throw(() => {instance.name = 2}, 'Name must be a non-empty string');
        
    });
    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.VAT, 20);

        instance.VAT = 10;

        assert.equal(instance.VAT, 10);
        assert.throw(() => {instance.VAT = -2}, 'VAT must be a non-negative number');
        assert.throw(() => {instance.VAT = '2'}, 'VAT must be a non-negative number');
    });
    it('value', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.value, 100);

        instance.value = 110;

        assert.equal(instance.value, 110);
        assert.throw(() => {instance.value = -2}, 'Value must be a non-negative number');
        assert.throw(() => {instance.value = '2'}, 'Value must be a non-negative number');

    });
    it('active', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.active, true);

        instance.active = false;
        assert.equal(instance.active, false);
        assert.throw(() => {instance.active = 0}, 'Active status must be a boolean');
    });
    it('toString', () => {
        let instance = new PaymentPackage('Name', 100);

        // let output = [
        //     `Package: Name`,
        //     `- Value (excl. VAT): 100`,
        //     `- Value (VAT 20%): ${100 * (1 + 20 / 100)}`
        // ].join('\n');

        // const output = [
        //     `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        //     `- Value (excl. VAT): ${this.value}`,
        //     `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        // ];
        // return output.join('\n');
        function getString(name, value, VAT = 20, active = true){
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }
        assert.equal(instance.toString(), getString('Name', 100));
        instance.active = false;
        assert.equal(instance.toString(), getString('Name', 100, 20, false));
        instance.VAT = 200;
        assert.equal(instance.toString(), getString('Name', 100, 200, false));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString('Gosho', 100, 200, false));
        instance.value = 2;
        assert.equal(instance.toString(), getString('Gosho', 2, 200, false));
    });
    });