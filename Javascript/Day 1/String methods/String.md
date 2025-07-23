## String

- The String object is used to represent and manipulate a sequence of characters.


> String Methods

- Slice Method
- Template String Method
- Trim Method
- String Concatenation
- touppercase Method
- tolowercase Method
- String repeat
- String replace

## Methods


> Slice Method
- Syntax : 
    - string.slice(startIndex, endIndex)
- Example : 
    - const originalString = "Hello World";<br>
    const newString = originalString.slice(0, 5);<br>
    console.log(newString);<br>
    console.log(originalString);<br>  

> Template  Method
- Syntax : 
    - ${...}
- Example : 
    - let firstName = "John";<br>
      let lastName = "Doe";<br>
      let text = `Welcome ${firstName}, ${lastName}!`;
 

> Trim Method
- Syntax : 
    - trim()
- Example :
    - const str = "   tanu  ";<br>
      console.log(str.trim());


>  String Concatenation
- Syntax : 
    - string.concat(string1, string2, ..., stringX)
- Example :
    - let text1 = "Hello";<br>
      let text2 = "world!";<br>
      let result = text1.concat(" ", text2);


> touppercase Method
- Syntax : 
    - string.toUpperCase()
- Example :
    - let text = "Hello World!";<br>
      let result = text.toUpperCase();

> tolowercase Method
- Syntax : 
    - string.toLowerCase()
- Example :
    - let text = "Hello World!";<br>
      let result = text.toLowerCase();


> String repeat Method
- Syntax : 
    - string.repeat(count)
- Example :
    - let text = "Hello world!";<br>
      let result = text.repeat(2);


> String replace Method
- Syntax : 
    - replace(pattern, replacement)
- Example :
    - const paragraph = "I think Ruth's  dog is cuter than your dog!";<br>
    console.log(paragraph.replace("Ruth's", "my"));