# Dictionary Program
# Create a program that:
# Stores student names and their grades in a dictionary
# Allows adding new students
# Finds the average grade
# Identifies the top performer

#  Initial student data stored in a dictionary
students = {
    "Tanuja": 88,
    "Sanika": 92,
    "Sneha": 79,
    "Priya": 85
}

#  Allow adding a new student
new_name = input("Enter new student name: ")
new_grade = float(input(f"Enter grade for {new_name}: "))
students[new_name] = new_grade

#  Calculate average grade
total = sum(students.values())
average = total / len(students)
print(f"\nAverage grade: {average:.2f}")

#  Identify the top performer
top_student = max(students, key=students.get)
top_grade = students[top_student]
print(f"Top performer: {top_student} with grade {top_grade}")
