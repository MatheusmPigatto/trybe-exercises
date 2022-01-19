const myRemove = require('./myRemove');

describe('Verify function myRemove([1, 2, 3, 4], 3)', () => {

    it('Verify if myRemove([1, 2, 3, 4], 3)', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });

    it('Verify function myRemove([1, 2, 3, 4], 3) dont return [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });

    it('Verify function myRemove([1, 2, 3, 4], 5)', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    })
});