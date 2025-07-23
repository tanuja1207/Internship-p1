let nameObj = {
    name: "sneha"
}

let PrintName = {
    name: "sanu",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}

PrintName.sayHi.apply(nameObj, [18]); // Output: sneha age is 18
