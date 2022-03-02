const calculator = require("./task3.js");
describe(test, () => {
  it("add two number: ", () => {
    //arrange
    const a = 1;
    const b = 2;
    //act
    const check = calculator.addition(a, b);
    //assert
    expect(check).toBe(3);
  });
});

describe(test, () => {
  it("add two number: ", () => {
    //arrange
    const a = 100;
    const b = 255;
    //act
    const check = calculator.addition(a, b);
    //assert
    expect(check).toBe(355);
  });
});

describe(test, () => {
  it("add two number: ", () => {
    //arrange
    const a = -1;
    const b = -2;
    //act
    const check = calculator.addition(a, b);
    //assert
    expect(check).toBe(-3);
  });
});
describe(test, () => {
  it("subtract two number: ", () => {
    //arrange
    const a = 1;
    const b = 2;
    //act
    const check = calculator.subtract(a, b);
    //assert
    expect(check).toBe(-1);
  });
});

describe(test, () => {
  it("subtract two number: ", () => {
    //arrange
    const a = -1;
    const b = 2;
    //act
    const check = calculator.subtract(a, b);
    //assert
    expect(check).toBe(-3);
  });
});

describe(test, () => {
  it("subtract two number: ", () => {
    //arrange
    const a = 0;
    const b = 2;
    //act
    const check = calculator.subtract(a, b);
    //assert
    expect(check).toBe(-2);
  });
});

describe(test, () => {
  it("multiply two number: ", () => {
    //arrange
    const a = 1;
    const b = 2;
    //act
    const check = calculator.multiply(a, b);
    //assert
    expect(check).toBe(2);
  });
});
describe(test, () => {
  it("multiply two number: ", () => {
    //arrange
    const a = 0.5;
    const b = 2;
    //act
    const check = calculator.multiply(a, b);
    //assert
    expect(check).toBe(1);
  });
});
describe(test, () => {
  it("multiply two number: ", () => {
    //arrange
    const a = -1;
    const b = 2;
    //act
    const check = calculator.multiply(a, b);
    //assert
    expect(check).toBe(-2);
  });
});

describe(test, () => {
  it("Divide two number: ", () => {
    //arrange
    const a = 1;
    const b = 2;
    //act
    const check = calculator.divide(a, b);
    //assert
    expect(check).toBe(0.5);
  });
});

describe(test, () => {
  it("Divide two number: ", () => {
    //arrange
    const a = 4;
    const b = 2;
    //act
    const check = calculator.divide(a, b);
    //assert
    expect(check).toBe(2);
  });
});

describe(test, () => {
  it("Divide two number: ", () => {
    //arrange
    const a = 10;
    const b = 2;
    //act
    const check = calculator.divide(a, b);
    //assert
    expect(check).toBe(5);
  });
});
