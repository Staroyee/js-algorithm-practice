// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  if (arr.length < 2) {
    // If the array has less than two elements, there's no product to find
    console.log("Array should have at least two numbers.");
    return;
  }

  // Sort the array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(`Sorted arr: ${arr}`);
  // Get the last two elements (largest numbers) in the sorted array
  const largestNumbers = arr.slice(-2);
  console.log(`Largest numbers: ${largestNumbers}`);
  // Calculate and return the product of the two largest numbers
  const product = largestNumbers[0] * largestNumbers[1];
  console.log(`Product: ${product}`);

  return product;
};
