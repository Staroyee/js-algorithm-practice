// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // set variable to keep track of vowel counts
  let vowelsCount = 0;
  // create an array of vowels using capitals and lowercase
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // Loop through the provided string
  for (let char of str) {
    // Compare each char in the string to the chars in the vowels array
    if (vowels.includes(char)) {
      // If the char in the string matches the char in the array it will add 1 to the vowelsCount variable
      vowelsCount++;
    }
  }
  // Return the value of the vowels count once the string has finished iterating through.
  return vowelsCount;
};
