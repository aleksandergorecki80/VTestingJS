import { it, expect } from 'vitest';
import { add } from './math';
 
it('should sumerise all numbers in an array', () => {
    
    // Arange 
    const numbers = [1,2,3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, currentValue) => prevValue+currentValue, 0)   
    expect(result).toBe(expectedResult);
});

it('should yeld  NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should give a correc sum if an array of numeric strings is provided', () => {
    const numbers = ['1','2','3'];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevValue, currentValue) => +prevValue + +currentValue, 0)   
    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {

    const resultFn = () => {
        add()
    }
    expect(resultFn).toThrow();
});

