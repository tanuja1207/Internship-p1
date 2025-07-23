#  Method Implementation
# Objective: Enhance the Student class with additional functionality.

# Add these methods to your Student class:
# - add_credits(course_name, credits): Store credit hours for each course
# - calculate_weighted_gpa(): Calculate GPA weighted by credit hours
# - get_highest_grade(): Returns the course name and highest grade
# - _str_: Returns a string representation of the student

class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.courses = {}  # course: grade
        self.credits = {}  # course: credits

    def enroll(self, course):
        self.courses[course] = None

    def update_grade(self, course, grade):
        if course in self.courses:
            self.courses[course] = grade

    def add_credits(self, course, credits):
        self.credits[course] = credits

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

    def calculate_weighted_gpa(self):
        total = 0
        credit_total = 0
        for course in self.courses:
            grade = self.courses[course]
            credit = self.credits.get(course, 0)
            if grade is not None:
                total += grade * credit
                credit_total += credit
        if credit_total == 0:
            return 0
        return total / credit_total

    def get_highest_grade(self):
        highest = -1
        best_course = None
        for course, grade in self.courses.items():
            if grade is not None and grade > highest:
                highest = grade
                best_course = course
        return best_course, highest

    def __str__(self):
        return f"Name: {self.name}, ID: {self.student_id}"

    def display_info(self):
        print(self)
        print("Courses and Grades:")
        for c, g in self.courses.items():
            print(f" - {c}: {g}, Credits: {self.credits.get(c, 0)}")
        print("GPA:", round(self.calculate_gpa(), 2))
        print("Weighted GPA:", round(self.calculate_weighted_gpa(), 2))
        best = self.get_highest_grade()
        if best[0]:
            print("Highest Grade:", best[0], "-", best[1])
        print()
