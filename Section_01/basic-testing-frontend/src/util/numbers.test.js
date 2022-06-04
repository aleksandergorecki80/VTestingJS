import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should return a number when muneric string is provided', () => {
    const argument = '1';

    const result = transformToNumber(argument);

    expect(result).toBeTypeOf("number");

});

// it('shoudl throw an error if no argument is provided', () => {
//     const resultFn = () => {
//         transformToNumber();
//     }

//     expect(resultFn).toThrow()
// });

it('should yeld if string cont be transformed to number', () => {
    const argument = 'invalid';

    const result = transformToNumber(argument);

    expect(result).toBeNaN(); 
});
