# Decorator Implementation
# Create a decorator that logs function execution details.

# Create a decorator called log_execution that:
# Records the timestamp when the function starts
# Records the timestamp when the function ends
# Logs the function name, execution time, and arguments
# Preserves the original function's return value
# Apply this decorator to at least two different functions and demonstrate its usage

import time
import functools
from datetime import datetime

def log_execution(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"Function '{func.__name__}' started at {start_timestamp}")
        print(f"   ➤ Arguments: args={args}, kwargs={kwargs}")

        result = func(*args, **kwargs)

        end_time = time.time()
        end_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        exec_time = end_time - start_time
        print(f"Function '{func.__name__}' ended at {end_timestamp}")
        print(f"Execution Time: {exec_time:.4f} seconds")
        print(f"Return Value: {result}")
        print("-" * 50)
        return result
    return wrapper

import time
import functools
from datetime import datetime

def log_execution(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        print(f"\n Function '{func.__name__}' started at {start_timestamp}")
        print(f"Arguments: args={args}, kwargs={kwargs}")

        result = func(*args, **kwargs)

        end_time = time.time()
        end_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        exec_time = end_time - start_time
        
        print(f"Function '{func.__name__}' ended at {end_timestamp}")
        print(f"Execution Time: {exec_time:.4f} seconds")
        print(f"Returned: {result}")
        print("-" * 50)

        return result
    return wrapper

# -------------------------
#  Sample Functions
# -------------------------

@log_execution
def multiply(x, y):
    time.sleep(1)
    return x * y

@log_execution
def say_hello(name):
    time.sleep(0.5)
    return f"Hello, {name}!"

# -------------------------
#  Run Functions
# -------------------------

multiply(6, 7)
say_hello("Tanu")
