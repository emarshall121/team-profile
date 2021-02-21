const Intern = require('../lib/Intern');

test('creates an engineer object', () => {
  const intern = new Intern('Emily', 1234, 'hello@aol.com', 'school');

  expect(intern.name).toBe('Emily');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toContain('@');
  expect(intern.school).toBe('school');
});