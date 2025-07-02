// ############## Parameters Destructuring : ###########

/*
const person = {
    firstname :"tanuja",
    gender : "female",
}

function printpersonDetails(obj){

    console.log(obj.firstname); // tanuja
    console.log(obj.gender);  // female
    console.log(obj.age);  // undefined
}

printpersonDetails(person);
*/




const person = {
    firstname :"tanuja",
    gender : "female",
    age : 21,
}
function printpersonDetails({firstname,gender,age}){

    console.log(firstname); 
    console.log(gender);  
    console.log(age);  
}
printpersonDetails(person);



