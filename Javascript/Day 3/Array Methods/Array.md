## Array

> Array Methods

- Array length	  

    - Returns the length (size) of an array

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        let size = fruits.length;

- Array toString()	

    - Converts an array to a comma separated string of values

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        let myList = fruits.toString();

- Array at()	

    - Returns an indexed element from an array

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        let fruit = fruits.at(2);

- Array join()	

    - Joins all array elements into a string

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        document.getElementById("demo").innerHTML = fruits.join(" * ");

- Array pop()	

    - Removes the last element from an array

        - Example : 
        const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        fruits.pop(); 

- Array push()	

    - Adds a new element to an array

    - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
     fruits.push("Kiwi");

- Array shift()

    - 	Removes the first array element

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
     fruits.shift();

- Array unshift()	

    - Adds a new element at the beginning of an array

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        fruits.unshift("Lemon");

- Array delete()	

    - Creates undefined holes in the array

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
       delete fruits[0];

- Array concat()	

    - Creates a new array by merging existing arrays

        - Example : const arr1 = ["Emil", "Tobias", "Linus"];<br>
        const myChildren = arr1.concat("Peter"); 

- Array copyWithin()

    - Copies array elements to another position in the array

        - Example : const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
        fruits.copyWithin(2, 0);

- Array flat()	

    - Creates a new array from sub-array elements

        -Example : const myArr = [[1,2],[3,4],[5,6]];<br>
        const newArr = myArr.flat();

- Array slice()	

    - Slices out a part of an array

        - Example :const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];<br>
        const citrus = fruits.slice(3);

- Array splice()	

    - Adds new items to an array

        - Example :const months = ["Jan", "Feb", "Mar", "Apr"];<br>
        const spliced = months.toSpliced(0, 1);

