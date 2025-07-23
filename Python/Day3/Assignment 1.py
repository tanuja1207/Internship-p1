# Write a Python program that asks the user to enter two numbers.

# Use arithmetic operators to calculate:
# Their sum
# Their difference
# Their product
# The result of dividing the first by the second
# The remainder when the first is divided by the second
# Then, use a comparison operator to check which number is greater and print an appropriate message.



num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Arithmetic operations
sum_result = num1 + num2
difference = num1 - num2
product = num1 * num2

# Division
if num2 != 0:
    division = num1 / num2
    remainder = num1 % num2
else:
    division = "Undefined (cannot divide by zero)"
    remainder = "Undefined (cannot divide by zero)"

# Display results
print("\n--- Results ---")
print("Sum:", sum_result)
print("Difference:", difference)
print("Product:", product)
print("Division:", division)
print("Remainder:", remainder)

# Comparison
if num1 > num2:
    print("The first number is greater than the second.")
elif num1 < num2:
    print("The second number is greater than the first.")
else:
    print("Both numbers are equal.")
