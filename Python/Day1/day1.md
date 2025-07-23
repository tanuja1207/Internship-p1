# Python Comments

Python comments are used to explain code and make it more readable. They are ignored during execution.



###  Types of Comments

> 1. Single-line Comments

- Single-line comments start with the # symbol.

- #This is a single-line comment


> 2. Multi-line Comments

 - Multi-line comments start with the """ symbol and with the same.

- """ This is a multi-line comment. """

##
    
#  Python Data Types

In Python, data types define the type of value a variable holds. Python is dynamically typed, so you don’t need to declare data types explicitly.

- int
- float
- str
- list
- tuple
- dict
- set
- frozenset
- bool
- bytes



- 1. int
    - Represents whole numbers (integers), positive or negative, without a decimal point.
       
         Example :
            5, -100

- 2. float
    - Represents real numbers with a decimal point.
       
         Example :
           3.14, -0.5

- 3. str
    - Represents sequences of characters, enclosed in single or double quotes.
       
         Example :
            "hello", 'Python'


- 4. list
    - An ordered, mutable collection of items, enclosed in square brackets. Items can be of different data types.
       
         Example :
            [12, "july", 2005]

- 5. tuple
    - An ordered, immutable collection of items, enclosed in parentheses.
       
         Example :
            (12, "july", 2005)
            

- 6. dict
    - An unordered collection of key-value pairs, enclosed in curly braces. Keys must be unique and immutable.
       
         Example :
            {"name" : "tanu" , "age" : 21}

- 7. set
    - An unordered collection of unique, immutable items, enclosed in curly braces.
       
         Example :
            {1, 2, 3}

- 8. frozenset
    - An immutable version of a set.
       
- 9. bool 
    - Represents truth values, either True or False.

- 10. bytes
    - Represents an immutable sequence of bytes.

##

#  Indentation in Python

Indentation refers to the whitespace at the beginning of a line of code. In Python, indentation is not optional —it defines the structure and flow of the program.


- Why is Indentation Important?

Unlike many programming languages that use {} to define code blocks, Python uses indentation.

-  Incorrect indentation will raise an IndentationError.

-  Correct Indentation Example

if True:
    print("This is indented correctly")
    print("This is part of the if block")

##

#  Python input() Function

The input() function in Python is used to **take input from the user** during program execution.

- Syntax

    input(prompt)

- Example

    name = input("Enter your name: ")

    print("Hello,", name)


##

# List in Python

### Functionality :

A list in Python is a mutable, ordered collection of items that can hold a mix of data types.

- Lists are created using square brackets [].

- Items are ordered by index, starting from 0.

- Lists are mutable, meaning their elements can be changed.

- Supports various operations: indexing, slicing, appending, removing, etc.

- Useful for storing multiple items in a single variable.

### Syntax :

- Creating a list
list = ["Tanuja", "Sanika", "Sneha"]

- Accessing elements
print(list[0])  # Tanuja

- Modifying a list
list[1] = ""

- Appending an item
list.append("Sanika")

- Removing an item
list.remove("Tanuja")

- Slicing a list
print(list[1:3])


### Example :

- Creating a list of names
names = ["Tanuja", "Sanika", "Sneha", "Priyanka"]

- Access by index
print(names[0])  # Tanuja

- Modify an element
names[2] = "Priyanka"

- Add a new name
names.append("Shweta")

- Remove a name
names.remove("Sanika")

- Slice the list
print(names[1:])  # ["Tanuja", "Sanika", "Sneha"]

