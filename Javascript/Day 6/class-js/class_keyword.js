class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I am ${this.name}`;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const user1 = new User("Tanuja", 21);
console.log(user1.greet());     // Hello, I am Tanuja
console.log(user1.isAdult());   // true
