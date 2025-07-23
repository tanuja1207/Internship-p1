// ES6 Modules - Demonstrating import/export usage

// ---------------------------
// Case 1: Importing Named Exports
// ---------------------------
// fname.js exports: export const fname = "Tanuja";
// age.js exports: export const age = 24;

import { fname } from './utils/fname.js';
import { age } from './utils/age.js';

console.log("Imported fname:", fname);
console.log("Imported age:", age);

// ---------------------------
// Case 2: Importing Default and Named Exports
// ---------------------------
// person.js exports:
// export default class Person { ... }
// export class Person2 { ... }

import Person, { Person2 } from './utils/person.js';

// Using the default export class
const person1 = new Person("Tanuja", "Kadam", 24);
console.log("Person1 object from default export:", person1);
person1.info();

// Using the named export class
const person2 = new Person2("Tanuja", "Kadam", 24);
console.log("Person2 object from named export:", person2);
person2.info();
