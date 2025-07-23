//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Event_Object.js" defer></script>
    <title>Click Event</title>
</head>
<body>
    <div class="my-buttons">
        <button id="one">Button1</button>
        <button id="two">Button2</button>
        <button id="three">Button3</button> 
    </div>
    
</body>
</html>
*/

// Event Object in JavaScript

// Select two buttons
const firstbtn = document.querySelector("#one");
const secbtn = document.querySelector("#two");

//  using normal function
firstbtn.addEventListener("click", function (event) {
  console.log("Normal function:");
  console.log("this refers to:", this); // Refers to the button
  console.log("Event object:", event);
  console.log("event.target:", event.target); // Element that was clicked
  console.log("event.currentTarget:", event.currentTarget); // Element where listener is attached
});

//  using arrow function
secbtn.addEventListener("click", (event) => {
  console.log("Arrow function:");
  console.log("this refers to:", this); // Refers to outer scope (not the button)
  console.log("Event object:", event);
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
});
