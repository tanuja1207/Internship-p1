# Array (List) Program: 
# Task: Create a program that:
# Stores daily temperatures in a list
# Finds the hottest/coldest day
# Calculates days above average
# Demonstrates list slicing

#  Store daily temperatures in a list (e.g., for a week)
temperatures = [32, 35, 30, 38, 33, 36, 31]  # Example: 7 days of data

#  Find the hottest and coldest day
hottest = max(temperatures)
coldest = min(temperatures)
print(f"Hottest temperature: {hottest}°C")
print(f"Coldest temperature: {coldest}°C")

#  Calculate average temperature
average_temp = sum(temperatures) / len(temperatures)
print(f"Average temperature: {average_temp:.2f}°C")

# Find number of days above average
above_avg_days = [temp for temp in temperatures if temp > average_temp]
print(f"Number of days above average: {len(above_avg_days)}")

#  Demonstrate list slicing
print("First 3 days' temperatures:", temperatures[:3])
print("Last 2 days' temperatures:", temperatures[-2:])
print("Middle days (excluding first and last):", temperatures[1:-1])
