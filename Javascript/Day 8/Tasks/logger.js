/*
Button Click Logger
Objective: Understand how to add event listeners using loops.
Task:
Select all <button> elements using querySelectorAll.
Add a click event to each button using a for loop.
When a button is clicked, log the button’s text using this.textContent.*/

// 1. Select all buttons
const buttons = document.querySelectorAll('button');

// 2. Loop through each button and add a click event
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(this.textContent); // Logs the text of the clicked button
  });
}
