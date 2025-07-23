/*Identify Clicked Button with Index
Objective: Learn how to track button index manually.
Task:
Use a loop to add click events to buttons.
When a button is clicked, log:
The button text
Its index (starting from 1), like: "You clicked button 2: Submit"*/

// Select all buttons
const buttons = document.querySelectorAll('button');

// Loop through each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // Log the index (starting from 1) and the button text
    console.log(`You clicked button ${i + 1}: ${this.textContent}`);
  });
}
