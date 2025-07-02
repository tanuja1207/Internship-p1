// ####################### fill Method ##################################




// const myArray =  new Array(10).fill(0);
// console.log(myArray);



const numbers = [1,2,3,4,5,76,6,78,9,9,8];

numbers.fill(0,3,7);
// value , start, end
// 0 will be filled, start from 3rd index, End before 7th index
// [1, 2, 3, 0, 0, 0, 0, 78, 9, 9, 8] 

console.log(numbers);
