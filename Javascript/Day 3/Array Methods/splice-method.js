// ################### Splice Method ##############################//



 const array = ['item1' , 'item2','item3','item4','item5'];

// ################ delete using splice ############# 

 input : ['item1', 'item2', 'item3', 'item4', 'item5']

// start from 1st index, delete (how many elements) - 2 
 array.splice(1,2);
 console.log(array);
// output : ['item1', 'item4', 'item5']
// two elements deleted from index 1.

// It also returns deleted Element

const deletedElement = array.splice(1,2);
console.log(array);
console.log(deletedElement);



/*
// ############ insert and delete simultaneously ############

const array = ['item1' , 'item2','item3','item4','item5'];

const deletedElements = array.splice(1,2,"insertitem1",'insertitem2');
console.log(array);
console.log(deletedElements);
// return array of deleted items
*/