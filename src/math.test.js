import { it, expect } from 'vitest';
import { add } from './math';
 
it('should sumerise all numbers in an array', () => {
    
    // Arange 
    const numbers = [1,2,3]
    
    // Act
    const result = add(numbers);
    
    // Assert
    expect(result).toBe(6);
});