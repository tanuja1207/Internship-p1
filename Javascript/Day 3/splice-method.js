// ################### Splice Method ##############################

// Initial Array
const array = ['item1', 'item2', 'item3', 'item4', 'item5'];


// ################### Delete Using Splice #####################

// Original: ['item1', 'item2', 'item3', 'item4', 'item5']
// Start from index 1, delete 2 items ('item2', 'item3')
const deletedElement = array.splice(1, 2);

// Output updated array and deleted elements
console.log("Updated Array:", array);            // ['item1', 'item4', 'item5']
console.log("Deleted Elements:", deletedElement); // ['item2', 'item3']


// ################### Insert & Delete Using Splice #####################

// Reset array to original for insert/delete example
const array2 = ['item1', 'item2', 'item3', 'item4', 'item5'];

// Start at index 1, delete 2 elements, and insert 2 new items
const deletedItems = array2.splice(1, 2, "insertitem1", "insertitem2");

// Output updated array and deleted elements
console.log("Updated Array After Insert & Delete:", array2);
// ['item1', 'insertitem1', 'insertitem2', 'item4', 'item5']

console.log("Deleted Items:", deletedItems);
// ['item2', 'item3']
