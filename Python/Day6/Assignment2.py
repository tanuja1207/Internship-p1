# Class and Object Implementation 

# Create a Student class to manage student information.
# Create a Student class with:
# Attributes: name, student_id, courses (dictionary to store course names and grades)
# Methods:
# enroll(course_name): Adds a course with default grade None
# update_grade(course_name, grade): Updates grade for a course
# calculate_gpa(): Returns average of all grades (ignore None values)
# display_info(): Shows all student information
# Create at least two Student objects and demonstrate all methods



class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.courses = {}

    def enroll(self, course_name):
        self.courses[course_name] = None

    def update_grade(self, course_name, grade):
        if course_name in self.courses:
            self.courses[course_name] = grade

    def calculate_gpa(self):
        total = 0
        count = 0
        for grade in self.courses.values():
            if grade is not None:
                total += grade
                count += 1
        if count == 0:
            return 0
        return total / count

    def display_info(self):
        print("Name:", self.name)
        print("ID:", self.student_id)
        print("Courses and Grades:")
        for course, grade in self.courses.items():
            print(f" - {course}: {grade}")
        print("GPA:", round(self.calculate_gpa(), 2))
        print()

# --------------------
# Create Student Objects
# --------------------

s1 = Student("Tanu", "101")
s2 = Student("Aarav", "102")

# Enroll Courses
s1.enroll("Math")
s1.enroll("Science")
s2.enroll("English")

# Update Grades
s1.update_grade("Math", 90)
s1.update_grade("Science", 80)
s2.update_grade("English", 85)

# Display Info
s1.display_info()
s2.display_info()
