// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  // loop over the array of numbers
  for (i = 0; i < arr.length; i++) {
    // check if the number at each index is equal to the target number
    if (arr[i] === target) {
      console.log(arr[i]);
      // return the index of the target number if it is in the array
      return i;
    }
  }
  // if the number is not in the array return -1
  return -1;
};
