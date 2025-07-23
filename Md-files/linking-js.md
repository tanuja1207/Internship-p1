# Ways of Linking JS file

## 1.Inline JavaScript:<br> 

- This method involves embedding JavaScript code directly within an HTML tag using an event attribute.

    - Example :<br>
    (button onclick="alert('Hello from inline JavaScript!')">Click Me</button)

    
## 2.Internal JavaScript:<br> 

- JavaScript code is placed within (script) tags directly in the HTML file, typically in the <head> or <body> section.

    - Example :<br>
       <!DOCTYPE html>
    <html>
    <head>
        <title>Internal JS Example</title>
        <script>
            function greet() {
                console.log("Hello from internal JavaScript!");
            }
        </script>
    </head>
    <body onload="greet()">
        <h1>Internal JavaScript</h1>
    </body>
    </html>

 ## 3.External JavaScript: <br>
 
 - This is the most common and recommended method for larger projects. JavaScript code is written in a separate .js file and linked to the HTML document using the src attribute of the (script) tag. 

    - Example :<br>
           <!DOCTYPE html>
    <html>
    <head>
        <title>External JS Example</title>
        <script src="my_script.js"></script>
    </head>
    <body>
        <h1>External JavaScript</h1>
    </body>
    </html>


 ## 4.Dynamic Script Loading:<br> 
 
 - JavaScript files can be loaded dynamically using JavaScript itself, often employed for performance optimization or when scripts are needed conditionally.

    - Example :<br>
    const script = document.createElement('script');
    script.src = 'dynamic_script.js';
    document.head.appendChild(script);