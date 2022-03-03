const uppercase = require("./task4.js");

describe("stringTestEmpty", () => {
  it("check string", () => {
    //arrange
    let string = "";
    //act
    const check = uppercase(string);
    //assert
    expect(check).toBe("empty");
  });
});
describe("string type test", () => {
  it("check string", () => {
    //arrange
    let string = 12;
    //act
    const check = uppercase(string);
    //assert
    expect(check).toBe("not a string");
  });
});

describe("string capitalize", () => {
  it("check string", () => {
    //arrange
    let string = "first";
    //act
    const check = uppercase(string);
    //assert
    expect(check).toBe("First");
  });
});
