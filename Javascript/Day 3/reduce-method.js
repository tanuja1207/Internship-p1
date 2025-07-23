// ###################### Reduce Method ###################

// Sum of Numbers in an Array

const numbers = [1, 2, 3, 4, 5, 10];

// reduce() takes a callback with accumulator and current value
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log("Total sum:", total); // Output: 25

// -------------------------------------------------------------

//  Real-World Example – Cart Total

const userCart = [
  { product_Id: 1, product_Name: "Mobile", price: 12000 },
  { product_Id: 2, product_Name: "TV", price: 22000 },
  { product_Id: 3, product_Name: "Laptop", price: 35000 },
  { product_Id: 4, product_Name: "Charger", price: 1000 },
];

// Calculate total cart value using reduce
const cartTotal = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0); // Initial value of totalPrice is 0

console.log("Cart total price:", cartTotal); // Output: 70000
