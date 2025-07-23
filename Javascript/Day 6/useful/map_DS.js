// Create a new Map
const userMap = new Map();

// Add key-value pairs
userMap.set('name', 'Tanuja');
userMap.set('age', 21);
userMap.set(1, 'Sanika');

// Accessing values
console.log(userMap.get('name'));  // Tanuja
console.log(userMap.get(1));       // Sanika

// Map preserves the data type of keys
userMap.set(true, 'Yes');
console.log(userMap.get(true));    // Yes

// Looping through Map
for (let [key, value] of userMap) {
    console.log(`${key} : ${value}`);
}
