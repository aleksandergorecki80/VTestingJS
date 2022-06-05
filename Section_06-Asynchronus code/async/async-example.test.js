import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'jankowalski@gmai.com';
    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();     // passes
            // expect(token).toBe(2);                // fails
            done();
        } catch (err) {
            done(err)
        } 
    });
    
});

it('should generate a token in promisse', () => {
    const testUserEmail = 'jankowalski@gmai.com';
    const result = generateTokenPromise(testUserEmail);
    expect(result).resolves.toBeDefined();
})