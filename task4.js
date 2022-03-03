const uppercase = (string) => {
  //   let firstLetter = a.charAt(0).toUpperCase();
  //   let slice = a.slice(1);
  //   let test = firstLetter + slice;
  //   return test;
  if (string.length === 0) {
    return "empty";
  } else if (typeof string !== "string") {
    return "not a string";
  } else {
    let firstLetter = string.charAt(0).toUpperCase();
    let slice = string.slice(1);
    let test = firstLetter + slice;
    return test;
  }
};
module.exports = uppercase;
