//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Query Selector Example</title>
  <link rel="stylesheet" href="style.css" />
  <script src="querySelector_.js" defer></script>
</head>
<body>
  <header class="header">
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About</a></li>
        <li class="nav-item"><a href="#">Services</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: #f9f9f9;
}

.header {
  background-color: #333;
  padding: 1rem;
  color: white;
}

.nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.nav-item a {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  display: inline-block;
  border-radius: 4px;
}
*/

// Select one element by class
const header = document.querySelector(".header");
console.log(header);

// Select first matching nav-item
const navItem = document.querySelector(".nav-item");
console.log(navItem);

// Select all matching nav-items
const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);
