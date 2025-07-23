const obj = {
    key1: 'value1',
    key2: 'value2',
};

// Cloning obj into obj2
const obj2 = Object.assign({}, obj);  // Creates a shallow copy

// Modifying original object
obj.key3 = 'value3';

console.log("Original Object:", obj);
// Output: { key1: 'value1', key2: 'value2', key3: 'value3' }

console.log("Cloned Object:", obj2);
// Output: { key1: 'value1', key2: 'value2' }
