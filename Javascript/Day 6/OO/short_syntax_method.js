// Object with a method using short syntax
const user1 = {
    first_name: "Tanuja",
    age: 21,

    // Short method syntax (no need for `function` keyword)
    about() {
        console.log(this); // refers to the user1 object
        console.log(this.first_name, this.age);
    }
};

user1.about();
