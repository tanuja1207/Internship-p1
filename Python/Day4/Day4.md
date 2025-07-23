#  Loops in Python

Loops are used to execute a block of code repeatedly. Python provides two main types of loops:

- for loop
- while loop

## 🔹 for Loop

Used to iterate over a sequence (like list, tuple, dictionary, string, or range).

###  Syntax:

for item in iterable:
    # do something


###  Example:

for i in range(5):
    print(i)


## 🔹 while Loop

Executes a block as long as the condition is True.

###  Syntax:

while condition:
    # do something


###  Example:

count = 0
while count < 5:
    print(count)
    count += 1


## 🔹 break Statement

Used to exit the loop prematurely.

###  Example:

for i in range(10):
    if i == 5:
        break
    print(i)


## 🔹 continue Statement

Skips the current iteration and continues with the next.

###  Example:

for i in range(5):
    if i == 2:
        continue
    print(i)

## 🔹 else with Loops

The else block is executed after the loop completes normally (not when it breaks).

###  Example:

for i in range(3):
    print(i)
else:
    print("Loop finished without break.")


###  Example with `break`:

for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("This won't be printed because of break.")


## 🔹 Nested Loops

A loop inside another loop.

###  Example:

for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")


## 🔹 Looping through Collections

###  List:

fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)


###  Dictionary:
info = {'name': 'Alice', 'age': 25}
for key, value in info.items():
    print(key, value)


## 🔹 Infinite Loop ( Use with care)

###  Example:
while True:
    print("Press Ctrl+C to stop.")


## Summary

| Loop Type   | Description |
|-------------|-------------|
| `for`       | Iterates over a sequence |
| `while`     | Repeats as long as condition is `True` |
| `break`     | Exits the loop |
| `continue`  | Skips the current iteration |
| `else`      | Runs after normal loop completion |


>  **Tip**: Loops are essential for automation, data processing, and working with sequences in Python.



##  More on Nested Loops

Nested loops are loops inside other loops. The **inner loop** completes all its iterations for every single iteration of the **outer loop**.

###  Example 1: Multiplication Table
for i in range(1, 4):         # Outer loop
    for j in range(1, 4):     # Inner loop
        print(i * j, end=" ")
    print()  # for newline

###  Example 2: Pattern Printing
rows = 4
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end="")
    print()

Nested loops are useful in matrix operations, pattern printing, and multi-dimensional data handling.


## Loop Control Statements

###  break Statement
Used to exit the loop prematurely.

for i in range(5):
    if i == 3:
        break
    print(i)


###  continue Statement
Skips the current iteration and continues with the next.

for i in range(5):
    if i == 2:
        continue
    print(i)


### pass Statement
A placeholder that does nothing.

for i in range(5):
    if i == 3:
        pass
    print(i)


## Summary Table

| Loop Type       | Description                                | Use Case Example               |
|----------------|--------------------------------------------|-------------------------------|
| `for` loop      | Iterates over items of a sequence          | `for i in range(10)`          |
| `while` loop    | Repeats while a condition is true          | `while x < 5:`                |
| `break`         | Exits the loop early                       | `if condition: break`         |
| `continue`      | Skips to next iteration                    | `if condition: continue`      |
| `pass`          | Does nothing, useful as placeholder        | `if condition: pass`          |



Tip: Use for when you know the number of iterations. Use while when the loop depends on a condition.


#  Scope in Python

In Python, **scope** refers to the region of a program where a **variable is recognized** and can be used. Understanding scope is essential for managing variables effectively in your programs.

---

## Types of Scope in Python

1. **Local Scope**
2. **Enclosing Scope**
3. **Global Scope**
4. **Built-in Scope**

This concept is often referred to as the **LEGB Rule**.



##  Local Scope

Variables defined inside a function are in the **local scope**.


def my_function():
    x = 10  # local scope
    print(x)

my_function()


##  Enclosing Scope

This refers to the scope of the **outer function** in a nested function.


def outer():
    x = "outer"
    def inner():
        print(x)  # accessing enclosing variable
    inner()

outer()


## Global Scope

Variables defined **outside all functions** are in the **global scope** and can be accessed inside functions using the `global` keyword if you want to modify them.


x = 5  # global variable

def my_function():
    global x
    x = 10

my_function()
print(x)  # Output: 10


## Built-in Scope

These are names that are built into Python (like `print()`, `len()`, etc.).

print(len("Hello"))  


## LEGB Rule Summary

| Scope Type   | Description                                   |
|--------------|-----------------------------------------------|
| Local        | Names assigned inside a function              |
| Enclosing    | Names in the local scope of enclosing function|
| Global       | Names defined at the top-level of a script    |
| Built-in     | Predefined names in Python                    |

---

##  Example Demonstrating All Scopes


x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)  # local
    inner()
    print(x)      # enclosing

outer()
print(x)          # global

local
enclosing
global

 **Tip:** Use global to modify global variables inside a function. Use `nonlocal` to modify variables from the enclosing scope.
