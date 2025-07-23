## 1. Operators

Operators are special symbols in Python that carry out arithmetic or logical computation. The value that the operator operates on is called the operand.


## Types of Operators

Python supports the following types of operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Identity Operators
6. Membership Operators
7. Bitwise Operators

## 1. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Description        | Example      |
|----------|--------------------|--------------|
| +        | Addition           | 3 + 2 = 5    |
| -        | Subtraction        | 5 - 3 = 2    |
| *        | Multiplication     | 4 * 2 = 8    |
| /        | Division           | 10 / 2 = 5   |
| //       | Floor Division     | 7 // 2 = 3   |
| %        | Modulus            | 7 % 2 = 1    |
| **       | Exponentiation     | 2 ** 3 = 8   |



## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example | Same As     |
|----------|---------|-------------|
| =      | a = 5     | a = 5       |
| +=     | a += 3    | a = a + 3   |
| -=     | a -= 3    | a = a - 3   |
| *=     | a *= 3    | a = a * 3   |
| /=     | a /= 3    | a = a / 3   |
| //=    | a //= 2   | a = a // 2  |
| %=     | a %= 3    | a = a % 3   |
| **=    | a **= 2   | a = a ** 2  |


## 3. Comparison Operators

Used to compare two values.

| Operator | Description        | Example        |
|----------|--------------------|----------------|
| ==       | Equal to           |  5 == 5 → True |
| !=       | Not equal to       |  5 != 3 → True |
| >        | Greater than       |  5 > 3 → True  |
| <        | Less than          |  3 < 5 → True  |
| >=       | Greater or equal   |  5 >= 5 → True |
| <=       | Less or equal      |  3 <= 5 → True |



## 4. Logical Operators

Used to combine conditional statements.

| Operator | Description          | Example             |
|----------|----------------------|---------------------|
| and      | True if both true    | x > 3 and x < 10    |
| or       | True if one is true  | x < 3 or x > 10     |
| not      | Reverses the result  | not(x > 5)          |



## 5. Identity Operators

Used to compare objects (not values).

| Operator | Description                   | Example              |
|----------|-------------------------------|----------------------|
| is       | True if same object           | x is y               |
| is not   | True if not same object       | x is not y           |



## 6. Membership Operators

Used to test if a value is in a sequence.

| Operator | Description              | Example           |
|----------|--------------------------|-------------------|
|  in      | True if value is present |  'a' in 'apple'   |
|  not in  | True if not present      |  'x' not in 'abc' |


## 7. Bitwise Operators

Used to compare binary numbers.

| Operator | Description            | Example         |
|----------|------------------------|-----------------|
| &        | AND                    | 5 & 3 = 1       |
| |        | OR                     | 5 | 3 = 7       |
| ^        | XOR                    | 5 ^ 3 = 6       |
| ~        | NOT                    | ~5 = -6         |
| <<       | Left Shift             | 5 << 1 = 10     |
| >>       | Right Shift            | 5 >> 1 = 2      |


## Operator Precedence (Order of Operations)

From highest to lowest precedence:

1. () – Parentheses  
2. ** – Exponentiation  
3. +x, -x, ~x – Unary plus, minus, bitwise NOT  
4. *, /, //, %  
5. +, -  
6. <<, >>  
7. &  
8. ^  
9. |  
10. ==, !=, >, <, >=, <=, is, in, etc.  
11. not  
12. and  
13. or  
14. = (and other assignment operators)



## Program


a = 10
b = 5

print("Addition:", a + b)

print("Equal:", a == b)

print("Logical AND:", a > 0 and b > 0)

print("Bitwise AND:", a & b)


# Python Functions - Complete Guide

## 1. Built-in Functions
These are pre-defined functions available in Python.

```python
print("Hello")
len("Python")
max(10, 20)
type(5)
```

---

## 2. User-defined Functions
Functions created using `def`.

```python
def greet():
    print("Hello, World!")

greet()
```

---

## 3. Function with Parameters
Pass values to functions.

```python
def add(a, b):
    return a + b

print(add(3, 5))  # Output: 8
```

---

## 4. Function with Default Parameter
Provides default value if not passed.

```python
def greet(name="Guest"):
    print("Hello", name)

greet("Swara")   # Hello Swara
greet()          # Hello Guest
```

---

## 5. Return Statement
Returns a value to the caller.

```python
def square(x):
    return x * x

result = square(4)  # 16
```

---

## 6. Recursive Function
A function that calls itself.

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

print(factorial(5))  # 120
```

---

## 7. Lambda Function (Anonymous Function)
Short one-line function using `lambda`.

```python
square = lambda x: x * x
print(square(5))  # 25
```

---

## 8. Function with *args (Variable-Length Positional Arguments)

```python
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # 10
```

---

## 9. Function with **kwargs (Variable-Length Keyword Arguments)

```python
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

print_details(name="Swara", age=21)
```

---

## 10. Nested Function
A function inside another function.

```python
def outer():
    def inner():
        print("Inside inner function")
    inner()

outer()
```

---

## 11. Higher-Order Function
Takes or returns another function.

```python
def greet(name):
    return f"Hello {name}"

def display(func):
    print(func("Swara"))

display(greet)
```

---

## Summary Table

| Function Type      | Example / Keyword   |
|--------------------|---------------------|
| Built-in           | `print()`, `len()`  |
| User-defined       | `def`               |
| Default args       | `def f(x=5)`        |
| Return values      | `return`            |
| Recursive          | Calls itself        |
| Lambda             | `lambda x: x*x`     |
| *args              | Positional args     |
| **kwargs           | Keyword args        |
| Nested             | Function inside     |
| Higher-order       | Takes/returns func  |
