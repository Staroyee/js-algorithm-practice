// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};
