// Dynamic keys
const key1 = "name";
const key2 = "age";
const key3 = "email";

// Values
const value1 = "Tanuja";
const value2 = 21;
const value3 = "tanuja7614@gmail.com";

// Create object using computed keys
const user = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3
};

console.log(user);
// Output: { name: 'Tanuja', age: 21, email: 'tanuja7614@gmail.com' }
