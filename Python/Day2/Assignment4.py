#  Basic Tuple Operations

# Create a program that: Creates a tuple of 5 student names,Prints the second student's name,Checks if "Alice" is in the tuple,Concatenates with another tuple of 3 new students,Prints the length of the final tuple

#  Create a tuple of 5 student names
students = ("Tanuja", "Shweta", "Sanu", "Rushi", "Neha")

#  Print the second student's name (index 1)
print("Second student:", students[1])

#  Check if "Alice" is in the tuple
if "Alice" in students:
    print("Alice is in the student list.")
else:
    print("Alice is not in the student list.")

#  Concatenate with another tuple of 3 new students
new_students = ("Alice", "Priya", "Sagar")
all_students = students + new_students

#  Print the length of the final tuple
print("Total number of students:", len(all_students))
