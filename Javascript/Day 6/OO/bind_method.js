const user1 = {
    first_name: "Tanu",
    age: 21
};

function about(hobby, favMusician) {
    console.log(this.first_name, this.age, hobby, favMusician);
}

// Bind the function with user1 and arguments
const boundFunc = about.bind(user1, "guitar", "bach");

// It returns a function, so now call it:
boundFunc();  // Output: Tanu 21 guitar bach
