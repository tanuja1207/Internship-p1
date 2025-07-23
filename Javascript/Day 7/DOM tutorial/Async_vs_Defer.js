//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Async vs Defer Demo</title>
  <link rel="stylesheet" href="style.css" />
  <script src="Async_vs_Defer.js" defer></script>
</head>
<body>
  <header class="header">
    <h1>Async vs Defer: Demo</h1>
  </header>

  <section class="content">
    <h2 id="demo-heading">This is the default heading.</h2>
    <p>This text will be updated by JavaScript.</p>

 
  </section>
</body>
</html>
*/

//## CSS File
/*
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #f5f5f5;
  color: #333;
  padding: 2rem;
}

.header {
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.content {
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

.explanation-box {
  background: #eee;
  padding: 1rem;
  margin-top: 2rem;
  border-left: 5px solid #444;
  overflow-x: auto;
}

code {
  font-family: monospace;
  white-space: pre-wrap;
}
*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("demo-heading").textContent =
    "DOM Loaded - Defer Script Executed";
});

const codeExplanation = `
<script src="Async_vs_Defer.js"></script>
<script src="Async_vs_Defer.js" async></script>
<script src="Async_vs_Defer.js" defer></script>
`;

