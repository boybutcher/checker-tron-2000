const { appendRows } = require(`./index.js`);

test(`should have 8 rows`, () => {
  expect(appendRows().children.length).toBe(8);
});
