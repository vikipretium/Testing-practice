const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error("too small or too large");
  } else {
    return string.length;
  }
};
module.exports = stringLength;
//test
console.log(stringLength("hellohell"));
