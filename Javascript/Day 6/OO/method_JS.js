// ######################## Object-Oriented JavaScript ######################## //


// A method that can be shared among all objects
function personInfo() {
    console.log(`Person name is ${this.first_name} and age is ${this.age}`);
}


// -----------------------------  Using direct object ----------------------------- //
const person = {
    first_name: "Tanuja",
    age: 22,
    gender: 'female',

    about: function () {
        console.log(`Person name is ${this.first_name} and age is ${this.age}`);
    }
};

person.about();  // Output: Person name is Tanuja and age is 22



// -----------------------------  Reusing a shared function ----------------------------- //
// Creating multiple person-like objects and assigning shared method
const person1 = {
    first_name: "Tanu",
    age: 22,
    gender: 'female',
    about: personInfo
};

const person2 = {
    first_name: "Sanu",
    age: 19,
    gender: 'female',
    about: personInfo
};

const person3 = {
    first_name: "Ram",
    age: 21,
    gender: 'male',
    about: personInfo
};


person1.about();  // Person name is Tanu and age is 22
person2.about();  // Person name is Sanu and age is 19
person3.about();  // Person name is Ram and age is 21

personInfo();  // undefined undefined
