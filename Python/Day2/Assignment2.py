# FrozenSet Operations
# Task:
# Create two frozen sets:
# A = frozenset([10, 20, 30, 40])
# B = frozenset([30, 40, 50, 60])
# Perform the following operations and print the results:
# Union of A and B.
# Intersection of A and B.
# Difference (A - B).
# Symmetric Difference (A ^ B).
# Check if A is a superset of {10, 20}.
# Try to add an element to A (observe the error since frozensets are immutable).
# Print the length of A and B.


# Create two frozen sets
A = frozenset([10, 20, 30, 40])
B = frozenset([30, 40, 50, 60])

# Union of A and B
union_result = A.union(B)
print("Union of A and B:", union_result)

# Intersection of A and B
intersection_result = A.intersection(B)
print("Intersection of A and B:", intersection_result)

# Difference (A - B)
difference_result = A.difference(B)
print("Difference (A - B):", difference_result)

# Symmetric Difference (A ^ B)
symmetric_difference_result = A.symmetric_difference(B)
print("Symmetric Difference of A and B:", symmetric_difference_result)

# Check if A is a superset of {10, 20}
is_superset = A.issuperset({10, 20})
print("Is A a superset of {10, 20}?:", is_superset)

# Try to add an element to A 
try:
    A.add(70)
except AttributeError as e:
    print("Error when trying to add to frozenset A:", e)

# Print the length of A and B
print("Length of frozenset A:", len(A))
print("Length of frozenset B:", len(B))
