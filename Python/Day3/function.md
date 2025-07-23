
#  Functions in Python

Functions are reusable blocks of code that perform a specific task. They help make code modular, readable, and easier to maintain.

## Defining a Function

Use the def keyword to define a function.

def greet():
    print("Hello, world!")

## Calling a Function

Invoke the function by its name followed by parentheses.

greet()  # Output: Hello, world!

## Function with Parameters

Functions can accept parameters to work with dynamic values.


def greet(name):
    print(f"Hello, {name}!")

greet("Tanuja")  # Output: Hello, Tanuja!

## Return Statement

Functions can return values using the return keyword.

def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8

## Default Parameters

You can assign default values to parameters.

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()         # Output: Hello, Guest!
greet("Tanuja") # Output: Hello, Tanuja!

## Keyword Arguments

You can pass arguments using parameter names.

def intro(name, age):
    print(f"{name} is {age} years old.")

intro(age=25, name="Tanuja")

## Variable-Length Arguments

### *args for variable number of positional arguments

def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3))  # Output: 6


### **kwargs for variable number of keyword arguments


def display_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display_info(name="Tanuja", age=25)


## Lambda Functions

Small anonymous functions defined with lambda.

square = lambda x: x ** 2
print(square(4))  # Output: 16


## Nested Functions

Functions defined inside other functions.


def outer():
    def inner():
        print("Inner function")
    inner()

outer()


## Function Scope

Variables have different scopes inside and outside functions.

x = "global"

def func():
    x = "local"
    print(x)

func()       # Output: local
print(x)     # Output: global


## Recursion

A function that calls itself.


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Output: 120


## Summary

| Concept               | Example Syntax                    |
|-----------------------|-----------------------------------|
| Basic Function        | def func():                       |
| With Parameters       | def func(a, b):                   |
| Return Values         | return value                      |
| Default Params        | def func(x=0):                    |
| Variable Args         | *args, **kwargs                 |
| Anonymous Function    | lambda x: x + 1                   |
| Recursive Function    | Function that calls itself        |


## Note

- Functions improve code reusability and readability.
- Use docstrings to document functions.
- Keep functions short and focused on a single task.


