function validate(schema) {
  Object.keys(schema).forEach((key) => {
    const config = schema[key];

    if (config.required && !process.env[key]) {
      throw new Error(`${key} is required`);
    }
  });
}

module.exports = { validate };
