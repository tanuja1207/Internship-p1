//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DOM Overview</title>
  <link rel="stylesheet" href="style.css" />
  <script src="dom_.js" defer></script>
</head>
<body>
  <h1 id="main-title">DOM Practice Page</h1>
  <p>This is a paragraph to demonstrate the DOM structure.</p>
  <div class="sample-div">
    <p>This is inside a div element.</p>
  </div>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 2rem;
}

h1 {
  color: #333;
}

.sample-div {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ddd;
  border-radius: 6px;
}
*/


console.log(window.document); // human-readable HTML structure
console.dir(window.document); // DOM as JS object (tree structure)

// DOM = Document Object Model

// JavaScript can't directly understand HTML tags like <h1>,
// so the browser converts it into objects (DOM) that JS can access and modify.

// Structure of DOM = Tree of nodes (each HTML element is a node)
// DOM allows us to select, modify, and add event listeners to nodes

// window → top-level object (represents browser window)
// document → part of window (represents the HTML document)
// All elements are accessed via the document object
