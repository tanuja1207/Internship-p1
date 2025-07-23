/*
Arrow Function vs Normal Function
Objective: Understand how this behaves in different functions.
Task:
Use forEach() to add click events to all buttons.
Use an arrow function inside addEventListener.
Log this inside the callback.*/

const buttons = document.querySelectorAll('button');

    console.log("=== Using Arrow Function ===");
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log("Arrow Function `this`:", this); // this refers to the window/global
        console.log("Arrow Function button text:", button.textContent);
      });
    });

    console.log("=== Using Normal Function ===");
    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        console.log("Normal Function `this`:", this); // this refers to the clicked button
        console.log("Normal Function button text:", this.textContent);
      });
    });