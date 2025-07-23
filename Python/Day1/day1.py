# Basic
print("*********Basics*********")
print("Hello");

#Input 
print("*********Input**********")
name=input("Enter Your Name: ");
print(" My Name is",name);

# Conditional Statement
print("******  Logical Condition with Different Values ******")

# Take 3 numbers from user and check which is the smallest
x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
z = int(input("Enter third number: "))

if x < y and x < z:
    print("'if block was executed' Smallest number is:", x)
elif y < x and y < z:
    print("'elif block was executed' Smallest number is:", y)
else:
    print("'else block was executed' Smallest number is:", z)


# Take a word and check if it's a palindrome
text = input("Enter a word to check for palindrome: ")
reversed_text = ''.join(reversed(text))

if text == reversed_text:
    print("The word is a palindrome:", text)
else:
    print("The word is not a palindrome:", text)


print("****** List ******")
# Lists are created using square brackets:
# List items are ordered, changeable, and allow duplicate values.
# List items are indexed, the first item has index [0], the second item has index [1] etc.

thislist = ["shweta", "priyanka", "sneha", "sanika", "tanuja"]
print(thislist)


# To determine how many items a list has, use the len() function:

thislist = ["shweta", "priyanka", "sneha"]
print(len(thislist))

# A list can contain different data types:
list1 = ["tanu", 21, True, "female"]
print(list1)


# It is also possible to use the list() constructor when creating a new list.
thislist = list(("shweta", "priyanka", "sneha")) # note the double round-brackets
print(thislist)