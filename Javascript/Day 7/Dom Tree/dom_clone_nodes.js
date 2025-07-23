//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clone Todo Item</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Todo List</h2>
  <ul class="todo-list">
    <li>Learn JavaScript</li>
    <li>Practice CSS</li>
  </ul>

  <script src="dom_clone_nodes.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f2f2f2;
}

ul.todo-list {
  background: white;
  padding: 10px 20px;
  border-radius: 8px;
  max-width: 300px;
  list-style: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.todo-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
*/


// Select the todo list (ul)
const ul = document.querySelector(".todo-list");

// Create a new li element
const li = document.createElement("li");
li.textContent = "New Todo1";

// Append the original li
ul.append(li);

// Clone the li deeply (including its content)
const li2 = li.cloneNode(true);

// Prepend the cloned version
ul.prepend(li2);

// Log the cloned li to console
console.log("Cloned Node:", li2);
