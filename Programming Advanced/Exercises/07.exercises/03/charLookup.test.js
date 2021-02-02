const {expect} = require('chai');
const charLookup = require('./charLookup');

describe('lookupChar', () => {

    it('FirstParam string', () => {
        expect(charLookup(5, 2)).to.equal(undefined);
    });
    it('SecondParam number', () => {
        expect(charLookup('str', 'str')).to.equal(undefined);
    });

    it('Index out of range', () => {
        expect(charLookup('niki', 5)).to.equal('Incorrect index');
    });

    it('Index out of range', () => {
        expect(charLookup('niki', 4)).to.equal('Incorrect index');
    });

    it('Index out of range', () => {
        expect(charLookup('niki', -1)).to.equal('Incorrect index');
    });

    it('Char at string', () => {
        expect(charLookup('niki', 2)).to.equal('k');
    });

});
