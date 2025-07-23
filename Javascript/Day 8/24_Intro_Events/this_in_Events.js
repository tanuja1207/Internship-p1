//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>This Keyword in Events</title>
  <script src="./this_in_Events.js" defer></script>
</head>
<body>
  <h1>Check Console for "this" Keyword Behavior</h1>
  <button class="btn-headline">Click Me</button>
</body>
</html>
*/

// This Keyword in Events

const btn = document.querySelector(".btn-headline");

// Using regular function
btn.addEventListener("click", function () {
  console.log("You clicked me (regular function)!");
  console.log("value of this:");
  console.log(this); // 'this' refers to the button element
});

// Using arrow function
btn.addEventListener("click", () => {
  console.log("You clicked me (arrow function)!");
  console.log("value of this:");
  console.log(this); // 'this' refers to the lexical scope (not the button)
});
