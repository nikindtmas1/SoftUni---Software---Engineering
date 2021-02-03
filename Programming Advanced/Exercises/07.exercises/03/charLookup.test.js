const {expect} = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar', () => {

    it('FirstParam string', () => {
        expect(lookupChar(5, 2)).to.equal(undefined);
        expect(lookupChar('str', 'str')).to.equal(undefined);
    });

    
    it('Index out of range', () => {
        expect(lookupChar('niki', -1)).to.equal('Incorrect index');
        expect(lookupChar('niki', 5)).to.equal('Incorrect index');
    });

    it('Char at string', () => {
        expect(lookupChar('niki', 2)).to.equal('k');
        expect(lookupChar('niki', 0)).to.equal('n');
    });

});
