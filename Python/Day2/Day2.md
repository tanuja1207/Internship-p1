## 1. Array (from array module)

Description:  
Array is a collection of elements of the same data type stored in a contiguous memory location.

Operations:
- Import: from array import array
- Create: arr = array('i', [1, 2, 3])
- Access: arr[0]
- Append: arr.append(4)
- Insert: arr.insert(1, 10)
- Remove: arr.remove(2)
- Pop: arr.pop()
- Loop: for i in arr: print(i)



## 2. String

#  Strings in Python

Strings are one of the most commonly used data types in Python. A string is a sequence of characters enclosed in quotes.


## 🔹 What is a String?

A string in Python is a sequence of Unicode characters enclosed in **single quotes (' ')**, **double quotes (" ")**, or **triple quotes (''' ''' or """ """)** for multi-line strings.

```python
str1 = 'Hello'
str2 = "World"
str3 = '''This is a 
multiline string'''
```

---

## 🔹 String Characteristics

| Feature       | Description                              |
|---------------|------------------------------------------|
| Immutable     | Strings cannot be changed after creation |
| Ordered       | Characters are stored in order           |
| Iterable      | Can be looped through character by character |
| Indexed       | Supports indexing and slicing            |

---

## 🔹 Accessing Characters

```python
s = "Python"

print(s[0])   # P
print(s[-1])  # n
print(s[1:4]) # yth
```

---

## 🔹 String Operations

| Operation      | Description                    |
|----------------|--------------------------------|
| `+`            | Concatenation                  |
| `*`            | Repetition                     |
| `in` / `not in`| Membership test                |
| `len()`        | Returns length of string       |

```python
a = "Hello"
b = "World"

print(a + " " + b)  # Hello World
print(a * 3)        # HelloHelloHello
print("e" in a)     # True
print(len(b))       # 5
```

---

## 🔹 String Methods

| Method             | Description                                  |
|--------------------|----------------------------------------------|
| `lower()`          | Converts to lowercase                        |
| `upper()`          | Converts to uppercase                        |
| `title()`          | Capitalizes each word                        |
| `strip()`          | Removes leading/trailing spaces              |
| `replace(old, new)`| Replaces substring                           |
| `find(sub)`        | Returns index of first occurrence            |
| `split()`          | Splits string into a list                    |
| `join(iterable)`   | Joins elements using string as separator     |
| `startswith()`     | Checks if string starts with given value     |
| `endswith()`       | Checks if string ends with given value       |

```python
s = "  Python Programming  "

print(s.lower())       # "  python programming  "
print(s.strip())       # "Python Programming"
print(s.replace("Python", "Java"))  # "  Java Programming  "
print(s.split())       # ['Python', 'Programming']
```

---

## 🔹 Looping Through Strings

```python
text = "Hello"
for char in text:
    print(char)
```

---

## 🔹 String Formatting

### Using `f-strings` (Python 3.6+)

```python
name = "Tanu"
age = 21
print(f"My name is {name} and I am {age} years old.")
```

### Using `format()`

```python
print("My name is {} and I am {} years old.".format("Tanu", 21))
```

---

## 🔹 Escape Characters

| Escape Code | Description         |
|-------------|---------------------|
| `\`        | Backslash           |
| `'`        | Single quote        |
| `"`        | Double quote        |
| `\n`       | Newline             |
| `\t`       | Tab                 |

```python
print("Hello\nWorld")  # Hello
World
print("She said, "Hi!"")
```

---

## 🔹 Multiline Strings

Use triple quotes for multiline strings:

```python
multi = '''This is
a multiline
string'''
print(multi)
```

---

## 🔹 Useful String Checks

```python
s = "123abc"

print(s.isalpha())    # False
print(s.isdigit())    # False
print(s.isalnum())    # True
print(s.islower())    # False
```

---

## 🔹 Strings Are Immutable

You cannot change a character in a string directly:

```python
s = "hello"
# s[0] = 'H' → Error
s = 'H' + s[1:]  # Correct way
print(s)  # Hello
```

---

## 🔹Summary

- Strings are immutable sequences of characters
- Created using quotes (single, double, triple)
- Use slicing, methods, and loops to work with them
- Powerful formatting and manipulation options




## 3. Set
# Sets in Python

Sets are one of the four built-in data types in Python used to store collections of items. The other three are Lists, Tuples, and Dictionaries.

## What is a Set?

A set is an unordered, unindexed, and mutable collection of unique elements, written in curly braces {} or using the set() constructor.

my_set = {1, 2, 3, "apple", True}


## Characteristics of Sets

| Property         | Description                                      |
|------------------|--------------------------------------------------|
| Unordered        | No guaranteed order of elements                  |
| Mutable          | Elements can be added or removed                 |
| No duplicates    | Duplicate values are automatically removed       |
| Heterogeneous    | Can store different data types                   |


## Creating Sets

# 1. With multiple items
s1 = {10, 20, 30}

# 2. With different data types
s2 = {"Tanu", 21, True, 92.5}

# 3. Empty set (correct way)
s3 = set()

# 4. Using set() constructor with list
s4 = set([1, 2, 3])

## Accessing Set Elements

Sets do not support indexing. Use a loop to access elements:

my_set = {1, 2, 3}

for item in my_set:
    print(item)


## Set Methods

| Method           | Description                                      |
|------------------|--------------------------------------------------|
| add(x)           | Adds an element x                                |
| update(iterable) | Adds multiple elements from an iterable          |
| remove(x)        | Removes x; raises error if x not found           |
| discard(x)       | Removes x if found; does nothing if not found    |
| pop()            | Removes and returns a random element             |
| clear()          | Removes all elements                             |
| copy()           | Returns a shallow copy of the set                |


s = {1, 2, 3}
s.add(4)
s.remove(2)
print(s)  


## Set Operations

| Operation         | Symbol / Method                      | Description                          |
|-------------------|----------------------------------- --|--------------------------------------|
| Union             | | or set1.union(set2)                | All unique elements from both sets   |
| Intersection      | & or set1.intersection(set2)         | Elements common to both sets         |
| Difference        | - or set1.difference(set2)           | Elements in set1 but not in set2     |
| Symmetric Diff.   | ^ or set1.symmetric_difference(set2) | Elements in either, but not both     |

a = {1, 2, 3}
b = {3, 4, 5}

print(a | b) 
print(a & b)  
print(a - b)  
print(a ^ b)  

## Set Membership

my_set = {1, 2, 3}

print(2 in my_set)     
print(4 not in my_set) 

## Frozen Sets

A frozenset is an immutable version of a set:

f = frozenset([1, 2, 3])
# f.add(4) → Error: frozenset object has no attribute add

## Sets vs Lists vs Tuples

| Feature       | Set              | List           | Tuple          |
|---------------|------------------|----------------|----------------|
| Syntax        | {} or set()      | []             | ()             |
| Mutable       | Yes              | Yes            | No             |
| Ordered       | No               | Yes            | Yes            |
| Duplicates    | No               | Yes            | Yes            |
| Indexed       | No               | Yes            | Yes            |
| Use Case      | Unique items     | Dynamic items  | Fixed records  |

## When to Use Sets

- When you need unique values
- For fast membership testing
- To perform set operations
- To remove duplicates from a collection

## Example

### Removing Duplicates from a List:

items = [1, 2, 2, 3, 4, 4, 5]
unique_items = set(items)

print(unique_items)  # Output: {1, 2, 3, 4, 5}

## Conclusion

- Sets are unordered, mutable, and store unique values
- Use {} or set() to create a set
- No indexing — use loops
- Powerful built-in operations: union, intersection, etc.
- Use sets for uniqueness, fast lookups, and efficient operations





## 4. Tuple

# Tuples in Python

Tuples are one of the four built-in data types in Python used to store collections of items. The other three are Lists, Sets, and Dictionaries. 

## What is a Tuple?

A tuple is an ordered, immutable (unchangeable) collection of elements, written in **round brackets ()**.

my_tuple = (1, 2, 3, "apple", True)

## Characteristics of Tuples

| Property         | Description                                  |
|------------------|----------------------------------------------|
| Ordered          | Maintains the order of elements              |
| Immutable        | Cannot be modified after creation            |
| Allow duplicates | Tuples can contain duplicate values          |
| Heterogeneous    | Can store different data types               |



## Creating Tuples

### 1. With multiple items

t1 = (10, 20, 30)


### 2. With different data types

t2 = ("Tanu", 21, True, 92.5)

### 3. Single-element tuple (note the comma!)

t3 = (5,)   # Without comma: it's just an int


### 4. Using tuple() constructor

t4 = tuple([1, 2, 3])


## Accessing Tuple Elements

Use indexing or slicing:

my_tuple = ("apple", "banana", "cherry")

print(my_tuple[0])     # apple
print(my_tuple[-1])    # cherry
print(my_tuple[1:])    # (banana, cherry)

## Tuple Methods

| Method       | Description                          |
|--------------|--------------------------------------|
| count(x)  | Returns the number of times x appears |
| index(x)   | Returns the first index of value x  |

### Example:

t = (1, 2, 3, 2, 4, 2)

print(t.count(2))  # Output: 3
print(t.index(4))  # Output: 4

## Tuple Packing and Unpacking

### Packing:

info = ("Tanu", 21, "Python")

### Unpacking:

name, age, lang = info
print(name)  # Tanu
print(age)   # 21


## Looping Through Tuples

fruits = ("apple", "banana", "cherry")

for fruit in fruits:
    print(fruit)


## Nested Tuples

nested = ((1, 2), (3, 4))
print(nested[0][1])  # Output: 2

## Tuples vs Lists

| Feature        | Tuple                  | List                  |
|----------------|------------------------|-----------------------|
| Brackets       | ()                     | []                    |
| Mutable        |  No                    | Yes                   |
| Performance    | Faster                 | Slower                |
| Use case       | Fixed data             | Dynamic data          |

## When to Use Tuples

- When data should not change
- For hashable data (can be keys in dictionaries)
- To store records (e.g., coordinates, RGB colors)
- For performance optimization


## Real-World Example

### Storing student record:

student = ("Tanu Kadam", "Computer Science", 8.7)

name, branch, cgpa = student

print(f"{name} studies {branch} and has a CGPA of {cgpa}")


##  Summary

- Tuples are ordered, immutable, and allow duplicates
- Use () or tuple() to create them
- Access with index or loop
- Useful for fixed collections and better performance

## 5. List

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



## 6. Dictionary



#  Dictionaries in Python

Dictionaries are one of the four built-in data types in Python used to store collections of data. The other three are Lists, Tuples, and Sets.

---

## 🔹 What is a Dictionary?

A dictionary is an unordered, mutable, and indexed collection of key-value pairs. Each key must be unique and immutable, while values can be of any data type.

```python
my_dict = {"name": "Tanu", "age": 21, "is_student": True}
```

---

## 🔹 Characteristics of Dictionaries

| Property         | Description                                      |
|------------------|--------------------------------------------------|
| Key-Value Pairs  | Each item is stored as a pair                    |
| Mutable          | Can add, update, or remove items                 |
| Unordered        | No guarantee of order (ordered as of Python 3.7) |
| Keys are Unique  | Keys must be unique and immutable                |
| Fast Lookup      | Optimized for retrieving values by key           |

---

## 🔹 Creating Dictionaries

```python
# 1. Using curly braces
d1 = {"a": 1, "b": 2}

# 2. Using dict() constructor
d2 = dict(name="Tanu", age=21)

# 3. Empty dictionary
empty = {}

# 4. Nested dictionary
nested = {
    "student": {"name": "Tanu", "age": 21},
    "course": "Python"
}
```

---

## 🔹 Accessing Dictionary Elements

```python
my_dict = {"name": "Tanu", "age": 21}

print(my_dict["name"])       # Tanu
print(my_dict.get("age"))    # 21
print(my_dict.get("grade", "N/A"))  # N/A (default if key not found)
```

---

## 🔹 Dictionary Methods

| Method           | Description                                      |
|------------------|--------------------------------------------------|
| `get(key)`       | Returns value of the key, or None                |
| `keys()`         | Returns all keys                                 |
| `values()`       | Returns all values                               |
| `items()`        | Returns list of (key, value) tuples              |
| `update()`       | Updates dictionary with another dictionary       |
| `pop(key)`       | Removes key and returns its value                |
| `popitem()`      | Removes and returns the last inserted item       |
| `clear()`        | Removes all items                                |
| `copy()`         | Returns a shallow copy                           |

```python
info = {"name": "Tanu", "age": 21}
info["age"] = 22
info.update({"city": "Mumbai"})
print(info)  # {'name': 'Tanu', 'age': 22, 'city': 'Mumbai'}
```

---

## 🔹 Looping Through Dictionary

```python
student = {"name": "Tanu", "branch": "CS"}

for key in student:
    print(key, student[key])

for key, value in student.items():
    print(f"{key}: {value}")
```

---

## 🔹 Dictionary Comprehension

```python
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

---

## 🔹 Nested Dictionaries

```python
college = {
    "student1": {"name": "Tanu", "age": 21},
    "student2": {"name": "Ravi", "age": 22}
}

print(college["student1"]["name"])  # Tanu
```

---

## 🔹 Dictionaries vs Other Collections

| Feature       | Dictionary            | List             | Set               | Tuple             |
|---------------|------------------------|------------------|--------------------|-------------------|
| Syntax        | `{key: value}`         | `[]`             | `{}` / `set()`     | `()`              |
| Mutable       | Yes                    | Yes              | Yes                | No                |
| Indexed       | By key                 | By position      | No                 | By position       |
| Ordered       | Yes (from Python 3.7)  | Yes              | No                 | Yes               |
| Duplicates    | No duplicate keys      | Yes              | No                 | Yes               |



## 🔹 When to Use Dictionaries

- When data needs to be **labeled or named**
- For **fast lookups** by keys
- To store **related data** (e.g., student records, configs)
- To map **keys to values**


## 🔹 Example

### Student Record:


student = {
    "name": "Tanu Kadam",
    "branch": "Computer Science",
    "cgpa": 8.7
}

print(f"{student['name']} studies {student['branch']} and has a CGPA of {student['cgpa']}")


##  Summary

- Dictionaries store data in key-value pairs
- Keys must be unique and immutable
- Use `{}` or `dict()` to create them
- Support fast access, update, and removal by key
- Great for labeled and structured data



