// ######################## some() Method #######################

//  Check if any number is even in the array
const numbers = [3, 5, 8, 9];

// some() returns true if at least one element satisfies the condition
const ans = numbers.some((number) => {
  return number % 2 === 0;
});

console.log("Even number :", ans); // Output: true


// -------------------------------------------------------------

//  Real-world use case - Check if any product is eligible for discount

const userCart = [
  { product_Id: 1, product_Name: "Mobile", price: 12000 },
  { product_Id: 2, product_Name: "TV", price: 22000 },
  { product_Id: 3, product_Name: "Laptop", price: 35000 },
  { product_Id: 4, product_Name: "Charger", price: 1000 },
];

// Check if any product's price is greater than ₹30,000
const giveDiscount = userCart.some((product) => {
  return product.price > 30000;
});

console.log("Discount:", giveDiscount); // Output: true
