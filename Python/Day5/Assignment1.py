# Simple Calculator using if-elif-else

print("Welcome to Simple Calculator!")
print("Operations: +  -  *  /")

# Taking input from user
num1 = float(input("Enter first number: "))
operator = input("Enter an operator (+, -, *, /): ")
num2 = float(input("Enter second number: "))

# Conditional logic for operations
if operator == '+':
    result = num1 + num2
    print(f"The result is: {result}")
elif operator == '-':
    result = num1 - num2
    print(f"The result is: {result}")
elif operator == '*':
    result = num1 * num2
    print(f"The result is: {result}")
elif operator == '/':
    if num2 == 0:
        print(" Error: Cannot divide by zero.")
    else:
        result = num1 / num2
        print(f"The result is: {result}")
else:
    print(" Invalid operator. Please use +, -, *, or /.")
