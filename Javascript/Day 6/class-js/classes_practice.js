// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calling parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks.`;
  }
}

const d = new Dog("Dog", "Labrador");
console.log(d.speak());       // Tommy barks.
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
