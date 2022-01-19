const sum = require('./sum');

describe('Verify function sum()', () => {
    it('Verifys if sum(4, 5) is 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Verify if sum(0, 0) is 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Verify if sum throw an error if passed an String', () => {
        expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));
    })
});