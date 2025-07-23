//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bounding Box Info</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <section class="section-todo">
    <h2>Todo Section</h2>
    <p>This section is being measured using getBoundingClientRect().</p>
  </section>

  <script src="dom_get_dimensions.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 50px;
  background-color: #f5f5f5;
}

.section-todo {
  width: 300px;
  height: 150px;
  background-color: #e0f7fa;
  padding: 20px;
  border: 2px solid #00796b;
  border-radius: 10px;
}
*/

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();

console.log("getBoundingClientRect() Info:");
console.log("Height:", info.height);
console.log("Width:", info.width);
console.log("Top (distance from top of viewport):", info.top);
console.log("Left (distance from left of viewport):", info.left);
console.log("Bottom:", info.bottom);
console.log("Right:", info.right);
