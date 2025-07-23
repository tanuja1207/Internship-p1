//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Old DOM Methods</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Todo List</h2>

  <ul class="todo-list">
    <li class="first-todo">Todo 1</li>
    <li>Todo 2</li>
    <li>Todo 3</li>
  </ul>

  <script src="dom_old_methods.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background-color: #f2f2f2;
}

.todo-list {
  background: white;
  padding: 10px 20px;
  border-radius: 8px;
  max-width: 300px;
  list-style-type: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.todo-list li {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
*/

// 1. appendChild Method

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Appended Todo";
ul.appendChild(li);



// 2. insertBefore Method
/*
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Inserted Before First";
const referenceNode = ul.querySelector("li");
ul.insertBefore(li, referenceNode);
*/


// 3. replaceChild Method
/*
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Replaced First";
const referenceNode = ul.querySelector("li");
ul.replaceChild(li, referenceNode);
*/


// 4. removeChild Method
/*
const ul = document.querySelector(".todo-list");
const li = document.querySelector(".first-todo");
ul.removeChild(li);
*/
