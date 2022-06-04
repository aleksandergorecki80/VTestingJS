import { it, expect } from 'vitest';
import { generateToken } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'jankowalski@gmai.com';
    generateToken(testUserEmail, (err, token) => {
        // expect(token).toBeDefined();
        try {
            expect(token).toBe(2);
            done();
        } catch (err) {
            done(err)
        } 
    });
    
});