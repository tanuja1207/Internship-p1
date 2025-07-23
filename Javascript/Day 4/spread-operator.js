// Spread operator with  array

const colors = ['red', 'blue'];
const moreColors = ['green', ...colors];

console.log(moreColors); // ["green", "red", "blue"]


// Spread operator with  objects

const user = { name: 'Tanuja', age: 21 };
const updatedUser = { ...user, city: 'Nashik' };

console.log(updatedUser); // { name: 'Tanuja', age: 21, city: 'Nashik' }
