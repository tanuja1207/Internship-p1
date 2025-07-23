function createAnimal(name, sound) {
    const animal = Object.create(createAnimal.prototype);
    animal.name = name;
    animal.sound = sound;
    return animal;
}

// Shared methods
createAnimal.prototype.speak = function () {
    return `${this.name} says ${this.sound}`;
};

createAnimal.prototype.isLoud = function () {
    return this.sound.length > 3;
};

// Create instances
const dog = createAnimal("Dog", "Woof");
const cat = createAnimal("Cat", "Meow");

// Use methods
console.log(dog.speak());   // "Dog says Woof"
console.log(cat.isLoud());  // true
