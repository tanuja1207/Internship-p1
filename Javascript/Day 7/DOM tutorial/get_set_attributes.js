//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Get/Set Attributes</title>
  <link rel="stylesheet" href="style.css" />
  <script src="get_set_attributes.js" defer></script>
</head>
<body>
  <nav>
    <ul>
      <li><a href="https://example.com" target="_blank">Visit Example</a></li>
    </ul>
  </nav>

  <section class="form-todo">
    <input type="text" placeholder="Type something..." />
  </section>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 2rem;
  color: #333;
}

a {
  font-size: 1.2rem;
  color: blue;
  text-decoration: underline;
}

.form-todo {
  margin-top: 2rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 300px;
}
*/

// Get attribute value
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // original href

// Set a new attribute value
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href")); // updated href

// Get input type attribute
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));
