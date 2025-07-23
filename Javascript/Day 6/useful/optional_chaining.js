const user = {
    firstName: "tanuja",
    address: { houseNumber: '12345' }
};

// Safe access with optional chaining
console.log(user?.firstName);              // "tanuja"
console.log(user?.address);                // { houseNumber: '12345' }
console.log(user?.address?.houseNumber);   // "12345"
