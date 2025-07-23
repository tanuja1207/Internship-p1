//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Click Multiple Buttons</title>
  <link rel="stylesheet" href="style.css" />
  <script src="./_click_on_Multiple.js" defer></script>
</head>
<body>
  <header class="header">
    <h1 class="logo">Multiple Button Click Events</h1>
  </header>

  <main class="container">
    <section class="button-section">
      <h2>Click any button below:</h2>
      <div class="my-buttons">
        <button id="one">Button 1</button>
        <button id="two">Button 2</button>
        <button id="three">Button 3</button>
        <button id="four">Button 4</button>
        <button id="five">Button 5</button>
      </div>
    </section>
  </main>
</body>
</html>
*/
// Multiple Button Click Events

console.log("Page Loaded");

// Method 1: Click event for a single button
const firstbtn = document.querySelector("#one");
firstbtn.addEventListener("click", function () {
  console.log("You clicked Button 1");
});

// Method 2: Click event for all buttons using forEach
const allButtons = document.querySelectorAll("button");

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("You clicked:", this.textContent);
    console.log(this); // Logs the full button element
  });
});

