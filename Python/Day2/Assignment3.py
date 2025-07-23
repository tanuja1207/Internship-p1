# String Methods

# 1. Write a program that combines a user's first and last name with a space in between.

# Ask user for their first name
first_name = input("Enter your first name: ")

# Ask user for their last name
last_name = input("Enter your last name: ")

# Combine first and last name with a space in between
full_name = first_name + " " + last_name

# Print the full name
print("Your full name is:", full_name)


# 2. Create a formatted string that displays: "The price of [item] is $[price]" (use variables).

# Variables
item = "Laptop"
price = 799.99

# Formatted string using f-string
message = f"The price of {item} is ${price}"

# Print the message
print(message)


# 3. Convert the string "hello world" to "HELLO WORLD" using string methods.

text = "hello world"
upper_text = text.upper()
print(upper_text)


# 4. Use .join() to convert the list ['Python', 'is', 'awesome'] into a proper sentence.

words = ['Python', 'is', 'awesome']
sentence = ' '.join(words)
print(sentence)


# 5. Print today's date in "DD-MM-YYYY" format using string formatting (use datetime module).

from datetime import datetime

# Get today's date
today = datetime.today()

# Format it as "DD-MM-YYYY"
formatted_date = today.strftime("%d-%m-%Y")

# Print the result
print("Today's date is:", formatted_date)
