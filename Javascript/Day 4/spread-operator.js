// Spread Operator
/*
const arr1 = [ 1,2,3];
const arr2 = [5,6,7];

const newarr = [...arr1,...arr2,82,13];



console.log(newarr);
*/

// Spread Operator in Objects
/*
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value3",
};
console.log(obj1);

*/

// Cloning in Objects
/*
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key3 : "value3",
    key4 : "value4",
};

// const newobj = {...obj1}
const newobj = {...obj1,...obj2};

console.log(newobj);

*/

// to they way there are added and cloned in sequence

const obj1 = {
    key1 : "value1",
    key2 : "value2",
    
};
const obj2 = {
    key1 : "addingUnique",
    key3 : "value3",
    key4 : "value4",
};

const newobj = {...obj1}

console.log(newobj);

