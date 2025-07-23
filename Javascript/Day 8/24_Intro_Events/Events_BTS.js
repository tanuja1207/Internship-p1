//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Events_BTS.js" defer></script>
    <!-- <script src="./practice_click_Event.js" defer></script> -->
    <title>Click Event</title>
</head>
<body>
    <div class="my-buttons">
        <button id="one">Button1</button>
        <button id="two">Button2</button>
        <button id="three">Button3</button> 
    </div>
    
</body>
</html>*/

console.log("Script Start");

// Select all buttons inside .my-buttons container
const allBtns = document.querySelectorAll(".my-buttons button");
console.log("All Buttons:", allBtns);

// Event listener for each button
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // A heavy task to simulate delay (blocking task)
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += i;
    }

    // Log which button was clicked and the result of the heavy task
    console.log("Clicked:", e.currentTarget.textContent, "Sum:", num);
  });
});

// A heavy task outside event (synchronous)
let outerVar = 0;
for (let i = 0; i <= 1000000000; i++) {
  outerVar += i;
}
console.log("Value of outerVar:", outerVar);

console.log("Script End");
