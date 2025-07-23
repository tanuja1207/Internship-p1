# 1. Defining a Function

def greet():
    print("Hello, Tanuja!")

# 2. Calling a Function

greet()  

# 3. Function with Parameters

def greet(name):
    print("Hello,", name)
    
greet("Tanu")  

 #4. Function with Return Value
def add(a, b):
    return a + b
result = add(5, 3)
print(result)


# 5. Default Parameters

def greet(name="Tanuja"):
    print("Hello,", name)

greet()          
greet("Tanu")   

# 6. Keyword Arguments

def student(name, age):
    print(name, "is", age, "years old.")

student(age=21, name="Tanu")  

#  7. Variable-Length Arguments

# *args (Non-keyworded)
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4)) 

# **kwargs (Keyworded)

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Tanu", age=21)

#  8. Lambda (Anonymous Function)

square = lambda x: x ** 2
print(square(5))  

#  9. Recursion (Function calling itself)

def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(4))  
print(factorial())