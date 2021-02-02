const {expect} = require('chai');
const sum = require('./sumNumbers');


describe('Sum numbers', () => {

    it('It sums single number', () => {
        expect(sum([1])).to.equal(1)
    });

    it('It sums multiple numbers', () => {
        expect(sum([1,1])).to.equal(2)
    });

    it('It sums diferent numbers', () => {
        expect(sum([2,3,4])).to.equal(9)
    });
});