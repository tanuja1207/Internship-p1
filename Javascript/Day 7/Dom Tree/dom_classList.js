
//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ClassList Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="header">
    <h1>This is the Header</h1>
  </div>

  <div class="section-todo">
    <p>This is the Todo Section</p>
  </div>

  <script src="dom_classList.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.header, .section-todo {
  padding: 20px;
  margin: 20px 0;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.bg-dark {
  background-color: #333;
  color: #fff;
}
*/

const sectionTodo = document.querySelector(".section-todo");
const header = document.querySelector(".header");

// View classList
console.log("Section classes:", sectionTodo.classList);

// Add a class
sectionTodo.classList.add("bg-dark");
console.log("After add:", sectionTodo.classList);

// Remove a class
sectionTodo.classList.remove("bg-dark");
console.log("After remove:", sectionTodo.classList);

// Check if a class exists
const hasBg = sectionTodo.classList.contains("bg-dark");
console.log("Contains 'bg-dark'?", hasBg);

// Toggle class (adds if not present, removes if present)
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");

// Apply class to header too
header.classList.add("bg-dark");
console.log("Header classes:", header.classList);
