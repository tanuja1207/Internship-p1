//##HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Little Events Demo</title>
    <link rel="stylesheet" href="little-demo.css">
    <script src="./intro_events.js" defer></script>
</head>
<body>
    <main>
        <div class="container">
            <h1> Current Color : <span class="currentColor"> rgb(122,122,122)  </span> </h1>
            <button>Change Background Color</button>
        </div>
    </main>
</body>
</html>
*/

// Introduction to Events in JavaScript

// There are three common ways to add events:

//  Inline in HTML (not recommended anymore):
/*
<button class="btn-headline" onclick="console.log('You Clicked me')">
  Learn More
</button>
*/

//  Using the `onclick` property in JavaScript:
/*
const btn = document.querySelector(".btn-headline");
console.log(btn);        // Shows the button element
console.dir(btn);        // Shows the object representation

btn.onclick = function () {
  console.log("You Clicked Me!!");
};
*/

//  Using `addEventListener()` method — preferred way:

const btn = document.querySelector(".btn-headline");

//  Using a named function
/*
function clickMe() {
  console.log("You Clicked Me!!");
}
btn.addEventListener("click", clickMe);
*/

//  Using an anonymous arrow function
constbtn.addEventListener("click", () => {
  console.log("You Clicked Me!!");
});
