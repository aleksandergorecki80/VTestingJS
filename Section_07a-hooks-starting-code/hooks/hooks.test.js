import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

let user = new User(testEmail);


beforeAll(() => {
  console.log('before all');
});

beforeEach(() => {
  console.log('before each');
});

afterEach(() => {
  console.log('after each');
});

afterAll(() => {
  console.log('after all');
});

it('should update the email', () => {
  const testEmail = 'test@test.com';
  const newTestEmail = 'test2@test.com';

  const user = new User(testEmail);
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  const testEmail = 'test@test.com';

  

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  const testEmail = 'test@test.com';

  const user = new User(testEmail);

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  const testEmail = 'test@test.com';

  const user = new User(testEmail);
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  const testEmail = 'test@test.com';

  const user = new User(testEmail);
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
