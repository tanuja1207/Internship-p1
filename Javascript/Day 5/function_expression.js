// ################### Basic Function Expression ###################

const printText = function () {
  console.log("This is console text");
};

printText();
printText();

// ################### Function Returning a Value ###################

const addition = function () {
  return 2 + 4;
};

const result = addition();
console.log("Addition Result:", result);

// ################### Function with Parameters ###################

const addTwo = function (num1, num2) {
  return num1 + num2;
};

console.log("Add Two Numbers:", addTwo(10, 20));

// ################### Function with 3 Parameters ###################

const addThree = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log("Add Three Numbers:", addThree(10, 20, 30));

// ################### Check Even or Odd ###################

const isEven = function (num) {
  return num % 2 === 0;
};

console.log("Is 2 Even?", isEven(2)); // true

// ################### First Character of String ###################

const firstChar = function (str) {
  return str[0];
};

console.log("First Character:", firstChar("tanuja"));

// ################### Linear Search in Array ###################

const linearSearch = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Index of 10:", linearSearch(numbers, 10));
