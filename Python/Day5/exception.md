
#  Exception Handling in Python

In Python, exceptions are errors detected during execution. Exception handling allows you to manage these errors gracefully.

---

## 🔹 What is an Exception?

An exception is an event that occurs during the execution of a program and disrupts the normal flow of the program's instructions.

---

## 🔹 try-except Block

###  Syntax:
```python
try:
    # code that may raise an exception
except ExceptionType:
    # code that runs if exception occurs
```

###  Example:
```python
try:
    a = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

---

## 🔹 Multiple except Blocks

You can handle different exceptions separately.

###  Example:
```python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input! Please enter an integer.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

---

## 🔹 try-except-else Block

The `else` block runs if no exception occurs.

###  Example:
```python
try:
    a = 5
    b = 2
    result = a / b
except ZeroDivisionError:
    print("Division by zero!")
else:
    print("Result is:", result)
```

---

## 🔹 try-except-finally Block

The `finally` block runs no matter what — even if an exception occurs or not.

###  Example:
```python
try:
    f = open("data.txt", "r")
    data = f.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Execution completed.")
```

---

## 🔹 Raising Exceptions

You can raise exceptions manually using `raise`.

###  Example:
```python
x = -5
if x < 0:
    raise ValueError("Negative value is not allowed.")
```

---

## 🔹 Custom Exception

Define your own exception by subclassing `Exception`.

###  Example:
```python
class MyError(Exception):
    pass

try:
    raise MyError("Something went wrong!")
except MyError as e:
    print(e)
```

---

##  Summary Table

| Keyword   | Description |
|-----------|-------------|
| `try`     | Code block to monitor for errors |
| `except`  | Code block to handle exceptions |
| `else`    | Runs if no exception occurs |
| `finally` | Always runs (cleanup actions) |
| `raise`   | Manually raise an exception |

---

>  Good exception handling improves program robustness and user experience.
