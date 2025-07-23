//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Change Text Content</title>
  <link rel="stylesheet" href="style.css" />
  <script src="text_Context.js" defer></script>
</head>
<body>
  <header class="header">
    <h1 id="main-heading">
      Manage your tasks <span style="display: none">[Hidden Text]</span>
    </h1>
  </header>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: #f0f0f0;
}

.header {
  text-align: center;
  background-color: #444;
  color: white;
  padding: 2rem;
  border-radius: 8px;
}
*/

const mainHeading = document.getElementById("main-heading");

console.log(mainHeading.textContent); // includes hidden text
console.log(mainHeading.innerText);   // ignores hidden text

mainHeading.textContent = "This is Something Else.";
