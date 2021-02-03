 const {expect} = require('chai');
 const mathEnforcer = require('./mathEnfo');

 describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });

        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('should return correct result with a negative number parameter', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('should return correct result with a floating-point number parameter', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });

    describe('subtractTen', () => {
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });

        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('should return correct result with a negative number parameter', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should return correct result with a floating-point number parameter', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        });
    });

    describe('sum', () => {
        it('should return correct result with a non-number parameters', () => {
            expect(mathEnforcer.sum(6, '4')).to.equal(undefined);
        });

        it('should return correct result with a non-number parameters', () => {
            expect(mathEnforcer.sum('6', 4)).to.equal(undefined);
        });

        it('should return correct result with a number parameters', () => {
            expect(mathEnforcer.sum(6, 4)).to.equal(10);
        });

        it('should return correct result with a number parameters', () => {
            expect(mathEnforcer.sum(6, -4)).to.equal(2);
        });

        it('should return correct result with a number parameters', () => {
            expect(mathEnforcer.sum(-6, -4)).to.equal(-10);
        });

        it('should return correct result with a number parameters', () => {
            expect(mathEnforcer.sum(1.6, 1.4)).to.equal(3);
        });
    });
 });