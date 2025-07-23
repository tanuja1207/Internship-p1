## Primitive Datatypes
- Primitive data types are the built-in data types provided by JavaScript. <br>
- They represent single values and are not mutable.<br>

> Primitive Datatypes

- Number
- String
- Undefined
- Boolean
- Null
- BigInt
- Symbol

> Details

- Number
    - A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

        - Example : <br>	
          var c = Number(5);<br>
          console.log(c);

- String
    - The string data type in JavaScript can be any group of characters enclosed by a single or double-quotes or by backticks.

        - Example : let str = 'Hello All';<br>
        let str1 = "Welcome to my new house";<br>
         console.log("Value of str=" + str);<br>
         console.log("Value of str1=" + str1);

      
- Undefined
    - Undefined data type means a variable that is not defined. The variable is declared but doesn’t contain any value.

        - Example : let x;<br>
           console.log(x); 


- Boolean
    - The boolean data type has only two values, true and false. It is mostly used to check a logical condition.

        - Example : let x;<br>
          console.log(x); 


- Null
    - The null in JavaScript is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

        - Example : let x = null;<br>
          console.log("Value of x=" + x);


- BigInt
    - Example : let bigNum = 123422222222222222222222222222222222222n<br>
    console.log(bigNum)


- Symbol
    - The symbol data type defines a property of an object which is private to the object. It refers to the ‘key’ of the key-value pair of an object.

         - Example : let sym = Symbol    ("Hello")<br>
          console.log(typeof(sym));<br>
          console.log(sym);


## Non-Primitive Datatypes
- Non-primitive data types, also known as reference types, are objects and derived data types. 
- They can store collections of values or more complex entities. 

> Non-Primitive Datatypes

- Object
- Array


> Details

- Object
    - The ‘object’ is a non-primitive data type in JavaScript. 
        - Example :<br>
         // defining an object in js<br>

         let student = {
         firstName: "Tanuja",
         lastName: "Kadam",
         };

         // printing the value of firstName and lastName on the console window<br>

         console.log(student.firstName + " " + student.lastName);


- Array
    - An array in JavaScript is an object data type. An array contains more than one value with a numerical index, where the index starts from 0. 

        - Example : <br>
          var arr1 = new Array();
          var arr2 = new Array(5);
          var arr3 = new Array(2, 4, 6, "string");

          console.log("arr1: " + arr1);
          console.log("arr2: " + arr2);
          console.log("arr3: " + arr3);


    


