// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  let camelChar = str.toLowerCase();
  return camelChar
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
};
