const {expect} = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('evenOdd', () => {

    it('isString', () => {
        expect(isOddOrEven(50)).to.equal(undefined);
    });

    it('isEven', () => {
        expect(isOddOrEven('niki')).to.equal('even');
    });

    it('isOdd', () => {
        expect(isOddOrEven('nikol')).to.equal('odd');
    });

});