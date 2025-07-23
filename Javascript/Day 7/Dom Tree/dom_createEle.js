//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo DOM Manipulation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Todo List Example</h2>

  <ul class="todo-list">
    <li>Existing Task 1</li>
    <li>Existing Task 2</li>
  </ul>

  <script src="dom_createEle.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background-color: #f9f9f9;
}

ul.todo-list {
  list-style: none;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

h2 {
  margin-bottom: 20px;
}
*/

// Case 1: Long Way (TextNode + append)
const newTodoItem1 = document.createElement("li");
const textNode1 = document.createTextNode("Teach Students");
newTodoItem1.append(textNode1);
const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem1);
console.log("Case 1 added:", newTodoItem1);

// Case 2: Short Way (textContent)
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "New Students";
todolist.append(newTodoItem2);
console.log("Case 2 added:", newTodoItem2);

// Case 3: Remove an item
const todoToRemove = document.querySelector(".todo-list li"); // First item
if (todoToRemove) {
  todoToRemove.remove();
  console.log("Removed first todo item");
}

// Case 4: Use before()
const beforeItem = document.createElement("li");
beforeItem.textContent = "Before UL";
todolist.before(beforeItem);

// Case 5: Use after()
const afterItem = document.createElement("li");
afterItem.textContent = "After UL";
todolist.after(afterItem);
