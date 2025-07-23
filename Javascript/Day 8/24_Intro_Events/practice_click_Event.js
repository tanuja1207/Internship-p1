//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Click Event Practice</title>
  <script src="./practice_click_Event.js" defer></script>
</head>
<body>
  <h1>Click Event Button Practice</h1>

  <div class="my-buttons">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </div>
</body>
</html>
*/

// Select all buttons inside .my-buttons
const allButtons = document.querySelectorAll(".my-buttons button");

// Select the body
const body = document.querySelector("body");

// Add click event to each button
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "purple";
    e.target.style.color = "gray";
  });
});
