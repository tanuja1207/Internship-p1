// ################# Functions in JavaScript #################


// -------- Arrow Function (Reusable code block) --------

const printText = () => {
    console.log("This is console text");
};

printText();
printText();


// -------- Function Expression (Returns value) --------

const addition = () => {
    return 12 + 4;
};

const result = addition();
console.log(result); // Output: 16


// -------- Function with Parameters --------

const additionOfThree = (num1, num2, num3) => {
    return num1 + num2 + num3;
};

const sum = additionOfThree(10, 20, 30); // Output: 60
console.log(sum);


// -------- Check if Number is Even --------

const isEven = (num) => {
    return num % 2 === 0;
};

console.log(isEven(4)); // Output: true


// -------- Return First Character of a String --------

const firstChar = (str) => {
    return str[0];
};

console.log(firstChar("Tanuja")); // Output: T


// -------- Linear Search Function --------

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultIndex = linearSearch(array, 10); // Output: 9
console.log(resultIndex);
