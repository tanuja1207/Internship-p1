
// to check Array we use isArray

let fruits = ["apple","mango","grapes"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));





// push
fruits.push("banana");
console.log(fruits);


//pop

let poppedelement=fruits.pop();
console.log(fruits);
console.log(poppedelement);

// unshift

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);


// shift


let shiftedele = fruits.shift();
console.log(fruits);
console.log(shiftedele);


