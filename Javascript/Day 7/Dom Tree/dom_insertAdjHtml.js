//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>insertAdjacentHTML Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Todo List</h2>

  <ul class="todo-list">
    <li>Original Task 1</li>
    <li>Original Task 2</li>
  </ul>

  <script src="dom_insertAdjHtml.js"></script>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background-color: #f0f0f0;
}

ul.todo-list {
  background: white;
  padding: 10px 20px;
  border-radius: 6px;
  max-width: 300px;
  list-style: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin: 20px 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}
*/

const todolist = document.querySelector(".todo-list");

// Adds <li> before the <ul> element itself
todolist.insertAdjacentHTML("beforebegin", "<li>beforebegin</li>");

// Adds <li> as the first child inside <ul>
todolist.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");

// Adds <li> as the last child inside <ul>
todolist.insertAdjacentHTML("beforeend", "<li>beforeend</li>");

// Adds <li> after the <ul> element itself
todolist.insertAdjacentHTML("afterend", "<li>afterend</li>");
