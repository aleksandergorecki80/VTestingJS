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

it('generated token should be a string', () => {
    const testUserEmail = 'jankowalski@gmai.com';
    const result = generateTokenPromise(testUserEmail);
    expect(result).resolves.toBeTypeOf('string');
})

it('generated token should be a string ASYNC - AWAIT', async () => {
    const testUserEmail = 'jankowalski@gmai.com';
    const result = await generateTokenPromise(testUserEmail);
    expect(result).toBeTypeOf('string');
})

it('should generate a token value - (RETURN ASSERTION)', () => {
    const testUserEmail = 'test@test.com';
    const result = generateTokenPromise(testUserEmail);
    return expect(result).resolves.toBeDefined();
  });