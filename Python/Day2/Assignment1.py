# Basic Set Operations
# Task:
# Write a Python program that performs the following operations on sets:
# Create two sets:
# set1 = {1, 2, 3, 4, 5}
# set2 = {4, 5, 6, 7, 8}
# Perform the following operations and print the results:
# Union of set1 and set2.
# Intersection of set1 and set2.
# Difference (set1 - set2).
# Symmetric Difference (elements in either set, but not in both).
# Check if set1 is a subset of set2.
# Add an element 9 to set1 and remove 8 from set2.
# Print the final modified sets.

# Creating two sets
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union of set1 and set2
union_set = set1.union(set2)
print("Union of set1 and set2:", union_set)

# Intersection of set1 and set2
intersection_set = set1.intersection(set2)
print("Intersection of set1 and set2:", intersection_set)

# Difference (set1 - set2)
difference_set = set1.difference(set2)
print("Difference of set1 - set2:", difference_set)

# Symmetric Difference 
symmetric_difference_set = set1.symmetric_difference(set2)
print("Symmetric Difference of set1 and set2:", symmetric_difference_set)

# if set1 is a subset of set2
is_subset = set1.issubset(set2)
print("Is set1 a subset of set2?:", is_subset)

# Add an element 9 to set1
set1.add(9)

# Remove element 8 from set2
set2.remove(8) 

# Print the final modified sets
print("Modified set1:", set1)
print("Modified set2:", set2)
