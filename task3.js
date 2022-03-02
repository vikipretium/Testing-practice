const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const calculator = {
  addition: (a, b) => add(a, b),
  subtract: (a, b) => sub(a, b),
  multiply: (a, b) => mul(a, b),
  divide: (a, b) => div(a, b),
};

module.exports = calculator;
