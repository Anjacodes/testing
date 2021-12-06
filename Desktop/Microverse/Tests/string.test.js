// const stringLength = require('./string');
// it('returns the length of the string', () => {
//     expect(stringLength('A string')).toBe(8);
// })

// it('tests if string has between 1 and 10 characters', () => {
//     expect(stringLength('A string')).toBeGreaterThanOrEqual(1);
//     expect(stringLength('A string')).toBeLessThanOrEqual(10);
// })

// const reverseString = require('./string');
// it('returns a reversed string', () => {
//     expect(reverseString('Hello')).toBe('olleH');
// })

// const calculator = require('./string');

// describe('my calculator', () => {
//     test('multiply', () => {
//         expect(calculator.multiply(5,2)).toBeGreaterThanOrEqual(0);
//         expect(calculator.multiply(5,2)).not.toBeUndefined();
//         expect(calculator.multiply(5,2)).toBe(10);
//     });
//     test('add', () => {
//         expect(calculator.add(5,2)).not.toBe(0);
//         expect(calculator.add(5,2)).not.toBeUndefined();
//         expect(calculator.add(5,2)).toBe(7);
//     });
//     test('subtract', () => {
//         expect(calculator.subtract(5,2)).not.toBe(0);
//         expect(calculator.subtract(5,2)).not.toBeUndefined();
//         expect(calculator.subtract(5,2)).toBe(3);
//     });
//     test('divide', () => {
//         expect(calculator.divide(5,2)).not.toBe(0);
//         expect(calculator.divide(5,2)).not.toBeUndefined();
//         expect(calculator.divide(5,2)).toBe(2.5);
//     });
// })

const capitalize = require('./string');

it('returns a string with the first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
})