//  Check if all numbers are even
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0); // returns true
console.log(allEven); // Output: true

// -----------------------------------------------------------------

//  Real-world use case – Check if all products are affordable
const userCart = [
  { product_Id: 1, product_Name: "Mobile", price: 12000 },
  { product_Id: 2, product_Name: "TV", price: 22000 },
  { product_Id: 3, product_Name: "Laptop", price: 35000 },
  { product_Id: 4, product_Name: "Charger", price: 1000 }
];

const giveDiscount = userCart.every(product => product.price <= 35000);
console.log(giveDiscount); // Output: true
