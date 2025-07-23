//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>getElementById Demo</title>
  <link rel="stylesheet" href="style.css" />
  <script src="get_elementby_id.js" defer></script>
</head>
<body>
  <h1 id="main-heading">This is the Main Heading</h1>
  <p>This demo shows how <code>getElementById</code> works in JavaScript.</p>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  padding: 2rem;
}

#main-heading {
  color: #5e0670;
  font-size: 2rem;
  margin-bottom: 1rem;
}
*/


console.log(window);
console.log(window.document);
console.dir(window.document);

console.log(typeof document.getElementById("main-heading"));
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));

const headerElement = document.getElementById("main-heading");
headerElement.style.color = "purple"; // You can change color to see effect
