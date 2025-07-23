// ################# Basic Function Declaration #################

function printText() {
  console.log("This is console text");
}

// Calling function multiple times
printText();
printText();

// ################# Function with Return #################

function addition() {
  return 2 + 4;
}

const result1 = addition();
console.log("Addition result:", result1);

// ################# Function with Parameters #################

function addTwo(num1, num2) {
  return num1 + num2;
}

console.log("Add Two Numbers:", addTwo(10, 20));

// ################# Function with 3 Parameters #################

function addThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log("Add Three Numbers:", addThree(10, 20, 30));

// ################# Check Even or Odd #################

function isEven(num) {
  return num % 2 === 0;
}

console.log("Is 2 even?", isEven(2)); // true

// ################# First Character of String #################

function firstChar(str) {
  return str[0];
}

console.log("First character:", firstChar("abcdef"));

// ################# Linear Search #################

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchResult = linearSearch(numbers, 10);
console.log("Linear search index:", searchResult);

