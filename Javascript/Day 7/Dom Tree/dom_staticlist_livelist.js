//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Static vs Live List</title>
  <link rel="stylesheet" href="style.css">
  <script src="dom_staticlist_livelist.js" defer></script>
</head>
<body>
  <div class="container">
    <h2>To-Do List (Live vs Static)</h2>
    <ul class="todo-list">
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  </div>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: 'Segoe UI', sans-serif;
  background: url("img.jpg") no-repeat center center/cover;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.todo-list li {
  bac
*/

const ul = document.querySelector(".todo-list");
const liItems = ul.getElementsByTagName("li");
console.log("Before adding new li (live list):", liItems);

const newLi = document.createElement("li");
newLi.textContent = "Item4";
ul.append(newLi);
console.log("After adding new li (live list):", liItems);

const staticList = document.querySelectorAll(".todo-list li");
console.log("Static list before append:", staticList);

const newStaticLi = document.createElement("li");
newStaticLi.textContent = "Item5";
ul.append(newStaticLi);
console.log("Static list after append:", staticList);
