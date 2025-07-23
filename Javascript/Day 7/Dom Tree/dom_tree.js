/*
[Document] — the root object of the entire HTML file
   |
   v
[html] — the root element of the page
   |
   +--> [head] — metadata container
   |      |
   |      +--> [title] — has a text node inside ("DOM Traversing")
   |      +--> [script] — links external JS file (e.g., dom_tree.js)
   |
   +--> [body] — visible content
          |
          +--> [div.container]
                  |
                  +--> [h1] — contains text node: "My Heading"
                  +--> [p] — contains text node: "Some Useful Information"
*/