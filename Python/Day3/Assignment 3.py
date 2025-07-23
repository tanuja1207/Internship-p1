# Write a function called greet(name) that:
# Takes one parameter name (a string)
# Prints: Hello, <name>! Welcome.

# Then:
# Ask the user to input their name.
# Call the greet function with the user’s name.

# Function to greet the user
def greet(name):
    print(f"Hello, {name}! Welcome.")

# Ask the user for their name
user_name = input("Enter your name: ")

# Call the function with the user's name
greet(user_name)
