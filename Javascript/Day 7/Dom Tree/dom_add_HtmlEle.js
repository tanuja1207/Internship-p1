// ## HTML File

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>My Todo List</h1>

  <button id="add-item">Add "Teach Students"</button>

  <ul class="todo-list">
    <li>Buy Groceries</li>
    <li>Do Homework</li>
  </ul>

  <script src="dom_add_HtmlEle.js"></script>
</body>
</html>
*/

// ## CSS File

/*
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f7f7f7;
}

h1 {
  color: #333;
}

ul.todo-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.todo-list li {
  background: #fff;
  margin: 8px 0;
  padding: 12px 16px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

button {
  padding: 10px 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
*/

document.getElementById("add-item").addEventListener("click", function () {
  // Create a new <li> element
  const newTodoItem = document.createElement("li");

  // Create a text node and add to <li>
  const newTodoItemText = document.createTextNode("Teach Students");
  newTodoItem.append(newTodoItemText);

  // Select the existing <ul> element
  const todolist = document.querySelector(".todo-list");

  // Append the new item to the list
  todolist.append(newTodoItem);
});
