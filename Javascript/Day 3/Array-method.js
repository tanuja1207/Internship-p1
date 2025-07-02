
let newarray = [];
console.log(newarray);
console.log(newarray.pop());
console.log(newarray);



// COnvert arr to String
//  replace and replaceAll method

const charArr = ["A", "M", "A", "N"];
const res = charArr.toString().replaceAll(",", "");
console.log(res);



// slice method
// doesnt modify orignal
const num = [1, 2, 3, 4, 5, 6, 7];

// exclusive value taken <2
const res1 = num.slice(2);
// exclusive value taken <4
const res2 = num.slice(0, 4);

// exclusive value taken <2
console.log(res1);
// exclusive value taken <4
console.log(res2);

// splice method
// modifies Original Array
// (start,deletecount,anythingtoAdd)
console.log(num);
num.splice(3, 0, "Abc");
num.splice(3, 2, "krk");
console.log(num);



// =================================================================================

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter method
// return new array as output acc to call back condition
const evenArray = number.filter((value, idx) => {
  console.log(value, idx);
  return value % 2 == 0;
});

console.log(evenArray);

let newArray = ["N", 1, 3, 4, 5, "A", 87, { name: "Newton" }];
newArray.forEach((e, index) => {
  if (typeof e === "object") {
    console.log(e, index);
  }
});

//find method
const checkObject = newArray.find((e) => e.name === "Newton");
const checkObjectIndex = newArray.findIndex((e) => e.name === "Newton");
console.log(checkObject);
console.log(checkObjectIndex);

// some --> It will check and return true if one matches in the array

const check = newArray.some((e) => e === "N");
console.log(check);

// every --> It will check all Elements in the array

let StudentsMarks = [45, 64, 77, 45, 54];

const check2 = StudentsMarks.every((e) => {
  return e > 35;
});

console.log(check2);

// reduce

let array = [4, 2, 3, 4, 5, 6, 7];

const newArray2 = array.reduce((accumulator, currentValue) => {
  console.log("acc :  ", accumulator);
  console.log("curr :  ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newArray2);

//----------------------------

let x = 10.7;
console.log(parseInt(x));
let y = 10.525;
console.log(Math.floor(y));
console.log(Math.abs(y));
console.log(Math.ceil(y));

let str = "newTono";
let str1 = "school";
console.log(str.length);
console.log(str.slice(0, 2));
console.log(str.charAt(4));
console.log(str.charCodeAt(4)); //ASCII
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(2, 5));
console.log(str.replace("n", "M"));
console.log(str.replaceAll("o", ""));
console.log(str.concat(str1));
str = " new  ton ";
console.log(str.trim("//s"));
console.log(str.trimEnd());
console.log(str.trimStart());
str = "newton school";
console.log(str.split(" "));
str = "4";
console.log(str.padStart(5, "0"));
console.log(str.padEnd(5, "0"));
