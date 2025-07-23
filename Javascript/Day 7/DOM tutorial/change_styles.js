//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Change Styles with JS</title>
  <link rel="stylesheet" href="style.css" />
  <script src="change_styles.js" defer></script>
</head>
<body>
  <header class="header">
    <nav class="nav container">
      <h1 class="logo">Website</h1>
      <ul class="nav-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Todo</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>

    <div class="headline">
      <h2 id="main-heading">Manage your tasks</h2>
      <button class="btn btn-headline">Learn More</button>
    </div>
  </header>
</body>
</html>
*/

//## CSS File
/*
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f0f0f0;
}

.header {
  background: #333;
  color: white;
  padding: 2rem;
  position: relative;
  text-align: center;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-items {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-items li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.headline {
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
}

.btn-headline {
  font-weight: 600;
}
*/

const divElement = document.querySelector("div"); // first div
console.log(divElement);

const heading2 = document.querySelector("div.headline h2");
console.log(heading2);
console.log(heading2.style);  

heading2.style.color = "#fff";
heading2.style.backgroundColor = "purple"; 
heading2.style.border = "5px solid black";
heading2.style.padding = "5px";

console.dir(window.document.head.style); // logs head style object
