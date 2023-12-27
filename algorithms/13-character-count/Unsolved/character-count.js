// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log(char);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);
  return charCount;
};
