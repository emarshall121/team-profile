const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Emily', 1234, 'hello@aol.com', 'username');

  expect(engineer.name).toBe('Emily');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toContain('@');
  expect(engineer.github).toBe('username');
});