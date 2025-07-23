//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Keyboard and Mouse Events</title>
  <script src="./keypress_mouseover.js" defer></script>
</head>
<body>
  <h1>Keyboard and Mouse Event Demo</h1>

  <button class="btn-headline">Hover or Leave Me</button>

  <p>Press any key on the keyboard to see the key logged in the console.</p>
</body>
</html>

*/

// Keypress event
const body = document.body;
body.addEventListener("keypress", (e) => {
  console.log(e.key); // Logs the key pressed
});

// Mouse events
const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", () => {
  console.log("Mouseover event occurred");
});

mainButton.addEventListener("mouseleave", () => {
  console.log("Mouseleave event occurred");
});
