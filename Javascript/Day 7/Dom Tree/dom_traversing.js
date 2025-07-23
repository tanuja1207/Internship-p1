//## HTML File
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Traversing</title>
  <script src="dom_traversing.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>My Heading</h1>
    <p>Some Useful Information.</p>
  </div>
</body>
</html>
*/

// Get the root node (document)
const rootNode = document.getRootNode();
console.log("Root Node:", rootNode);

// Get the <html> element (first child of document)
const htmlElement = rootNode.documentElement;  // or rootNode.childNodes[0]
console.log("HTML Element:", htmlElement);

// Get <head> and <body> using direct properties (more reliable than childNodes)
const head = htmlElement.querySelector("head");
const body = htmlElement.querySelector("body");

console.log("Head:", head);
console.log("Body:", body);

// Get <title> inside <head>
const title = head.querySelector("title");
console.log("Title:", title);

// Show child nodes of <title>
console.log("Title.childNodes:", title.childNodes); // usually contains a Text node

// Sibling check (should be null in this case)
console.log("Title.nextElementSibling:", title.nextElementSibling);

// === DOM Traversal Demo ===

// Select h1 element inside container
const h1 = document.querySelector(".container h1");

// Traverse to its parent (div.container) and grandparent (body)
const parentDiv = h1.parentElement;
const grandParentBody = parentDiv.parentElement;

// Apply styles using JS DOM traversal
parentDiv.style.backgroundColor = "#333";
parentDiv.style.color = "#fff";

grandParentBody.style.backgroundColor = "purple";

// Container element debug
const container = document.querySelector(".container");
console.log("Container:", container);
console.log("container.childNodes:", container.childNodes);   // includes text
console.log("container.children:", container.children);       // only elements
