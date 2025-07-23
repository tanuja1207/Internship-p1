//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inner HTML Example</title>
  <link rel="stylesheet" href="style.css" />
  <script src="innerHTML_.js" defer></script>
</head>
<body>
  <div class="headline">
    <h2>This is the Original Headline</h2>
  </div>
</body>
</html>
*/

//## CSS File
/*
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 2rem;
}

.headline {
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
}
*/

// Select element
const headLine = document.querySelector(".headline");
console.log(headLine);

// Get current inner HTML
console.log(headLine.innerHTML);

// Update inner HTML
headLine.innerHTML = "<h1>Inner Html Changed So Manage</h1>";
headLine.innerHTML += "<button class=\"btn btn-headline\">Learn More</button>";

// Log updated HTML
console.log(headLine.innerHTML);
