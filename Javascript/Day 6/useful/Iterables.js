// ################# Iterables ####################### 

// String is iterable
const first_name = "kadam";

for (let ch of first_name) {
    console.log(ch); // Outputs each character: k, a, d, a, m
}

// Array is iterable
const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let num of numbers) {
    console.log(num); // Outputs: 1 to 7
}

// Objects are not directly iterable

const users = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

//  This will throw an error:
// for (let user of users) {
//     console.log(user);
// }

//  Use Object methods to iterate:
for (let key of Object.keys(users)) {
    console.log(key, users[key]);
}
