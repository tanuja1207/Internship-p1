function greet(language, time) {
  console.log(`${this.name} says Good ${time} in ${language}`);
}

const person1 = { name: "Tanuja" };
const person2 = { name: "Sanika" };

// Using call
greet.call(person1, "English", "Morning"); // Tanuja says Good Morning in English
greet.call(person2, "Marathi", "Morning"); // Sanika says Good Morning in Marathi
