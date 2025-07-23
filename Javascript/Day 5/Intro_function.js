// Function in JavaScript

// Function Declaration

// Printing the same message using a function
function printText() {
    console.log("This is console text");
}

// Calling the function multiple times
printText();



//  Simple addition with no parameters
function addition() {
    return 2 + 4;
}
const result = addition();
console.log(result); // 6



// Addition with two parameters
function additionTwo(num1, num2) {
    return num1 + num2;
}
const result2 = additionTwo(10, 20);
console.log(result2); // 30



//  Addition with three parameters
function additionOfThree(num1, num2, num3) {
    return num1 + num2 + num3;
}
const sum = additionOfThree(10, 20, 30);
console.log(sum); // 60



// Check if number is even
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(2)); // true
console.log(isEven(5)); // false



//  Get first character of a string
function firstChar(str) {
    return str[0];
}
console.log(firstChar("abcdef")); // a



//  Linear Search


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = linearSearch(arr, 10);
console.log(index); // 9
