
// Sort Method

// Sorting UserName

const UserNames = ['harshit','sneha','sanu','tanu','rushi'];
UserNames.sort();
console.log(UserNames);


// Real World Example
// price lowToHigh HighToLow


const products = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},
    {product_Id : 5,product_Name : "ipad", price : 15000},

]

// Low to High Price

const lowToHigh = products.slice(0).sort((a,b)=>{
   return a.price - b.price;
})

console.log(lowToHigh);

// High to Low Price

const HightoLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
 })
 
 console.log(HightoLow);
 