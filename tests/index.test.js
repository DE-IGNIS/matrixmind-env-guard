const { validate } = require("../src/index.js");

beforeEach(() => {
  delete process.env.PORT;
  delete process.env.DEBUG;
});

test("validate function throws only when required field is missing", () => {
  expect(() => validate({ PORT: { required: true } })).toThrow();
  expect(() => validate({ DEBUG: { required: false } })).not.toThrow();
  expect(() => validate({ PORT: { required: false } })).not.toThrow();
});
