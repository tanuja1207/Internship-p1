# Write a Python program 
# A global variable called counter initialized to 0.
# A function increment() that:
# Increases the value of counter by 1.
# Prints the new value.
# Call the function three times and show how the global variable changes.

# Global variable
counter = 0

# Function to increment the counter
def increment():
    global counter  # Declare that we're using the global variable
    counter += 1
    print("Counter value:", counter)

# Call the function three times
increment()
increment()
increment()
increment()
