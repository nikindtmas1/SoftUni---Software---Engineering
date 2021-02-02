const {expect} = require('chai');
const isSymmetric = require('./isSymmetric');

describe('isSymmetric', () => {

    it('returns true with valide symmetric input', () => {
        expect(isSymmetric([1,1])).to.be.true;
    });

    it('returns false with no-valide symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it('returns false for invalide argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns false for diferent type element', () => {
        expect(isSymmetric(['1',1])).to.be.false;
    });

    //test over

    it('returns true for valide symmetric odd-element arr', () => {
        expect(isSymmetric([1,1,1])).to.be.true;
    });

    it('returns true for valide symmetric string arr', () => {
        expect(isSymmetric(['a','a'])).to.be.true;
    });

    it('returns false for valide non-symmetric string arr', () => {
        expect(isSymmetric(['a','b'])).to.be.false;
    });
});