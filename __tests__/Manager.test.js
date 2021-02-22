const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
  const manager = new Manager('Emily', 1234, 'hello@aol.com', 520-334-1234);

  expect(manager.name).toBe('Emily');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toContain('@');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});