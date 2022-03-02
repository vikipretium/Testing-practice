const reverseString = require("./task2.js");

it("string reverse check:- ", () => {
  //arrange
  const string = "lol";
  //act
  const check = reverseString(string);
  //assert
  expect(check).toBe("lol");
});
