//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Iterate Elements</title>
  <link rel="stylesheet" href="style.css" />
  <script src="iterate_elements.js" defer></script>
</head>
<body>
  <nav>
    <ul class="nav-list">
      <li class="nav-item"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">About</a></li>
      <li class="nav-item"><a href="#">Projects</a></li>
      <li class="nav-item"><a href="#">Contact</a></li>
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
  gap: 1rem;
  padding: 0;
}

.nav-item a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: inline-block;
  border-radius: 4px;
}
*/

// Select all anchor tags using querySelectorAll (NodeList)
let anchorTags = document.querySelectorAll("a");

// Use forEach directly on NodeList
anchorTags.forEach((anchorTag) => {
  anchorTag.style.color = "purple";
  anchorTag.style.backgroundColor = "#fff";
  anchorTag.style.fontWeight = "bold";
});
