//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Select Multiple Elements</title>
  <link rel="stylesheet" href="style.css" />
  <script src="getElebyClass_queryAll.js" defer></script>
</head>
<body>
  <nav>
    <ul class="nav-list">
      <li class="nav-item">Home</li>
      <li class="nav-item">About</li>
      <li class="nav-item">Contact</li>
    </ul>
  </nav>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 2rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}
*/

// Select multiple elements using querySelectorAll
const navItems = document.querySelectorAll(".nav-item");

console.log(navItems);       // NodeList
console.log(navItems[0]);    // First item
console.log(navItems[1]);    // Second item
