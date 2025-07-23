const person = {
    firstname: "tanuja",
    gender: "female",
    age: 21,
}

// Destructuring the object directly in function parameters
function printpersonDetails({ firstname, gender, age }) {
    console.log(firstname); // tanuja
    console.log(gender);    // female
    console.log(age);       // 21
}

printpersonDetails(person);

