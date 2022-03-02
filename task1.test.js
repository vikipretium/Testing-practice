const stringLength = require("./task1.js");

it("String Length:1 - ", () => {
  //arrange
  const string = "hellohell";
  //act
  const check = stringLength(string);
  //assert
  expect(check).toBe(9);
});

it("String length:2 - ", () => {
  //arrange
  const string = "Hellohellohello";
  //act
  const check = () => stringLength(string);
  //assert
  expect(check).toThrow("too small or too large");
});
