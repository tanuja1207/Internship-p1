// Convert Array to String (remove commas)
const charArr = ["T", "A", "N", "U"];
const result = charArr.toString().replaceAll(",", "");
console.log(result); // "TANU"

// Slice (non-destructive)
const nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3)); // [2, 3]

// Splice (destructive)
nums.splice(2, 1, "X");
console.log(nums); // [1, 2, "X", 4, 5]

// Filter even numbers
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// forEach (log objects)
const mixedArr = ["T", 1, { name: "Tanu" }];
mixedArr.forEach((el, i) => {
  if (typeof el === "object") console.log(el, i);
});

// find & findIndex
console.log(mixedArr.find(e => e.name === "Tanu"));     // {name: "Tanu"}
console.log(mixedArr.findIndex(e => e.name === "Tanu")); // 2

// some & every
console.log(mixedArr.some(e => e === "T")); // true
const marks = [45, 60, 55];
console.log(marks.every(m => m > 35)); // true

// reduce
const arr = [1, 2, 3];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 6

// Math functions
let x = 10.7;
console.log(parseInt(x), Math.floor(x), Math.ceil(x)); // 10 10 11

// String methods
let str = "Tanuja School";
console.log(str.length);           // 13
console.log(str.slice(0, 4));      // "Tanu"
console.log(str.charAt(2));        // "n"
console.log(str.toUpperCase());    // "TANUJA SCHOOL"
console.log(str.toLowerCase());    // "tanuja school"
console.log(str.replace("a", "X")); // first 'a' to 'X'
console.log(str.replaceAll("o", "")); // remove all 'o'
console.log(str.split(" "));       // ["Tanuja", "School"]

// padStart & padEnd
let numStr = "4";
console.log(numStr.padStart(4, "0")); // "0004"
console.log(numStr.padEnd(4, "0"));   // "4000"
