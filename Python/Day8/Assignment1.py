# Task 1: Polymorphism / Overriding
# * Create a base class Shape with a method area() that returns 0.
# * Create child classes Circle and Rectangle that override the area() method:
#       Circle should use πr² (use math.pi).
#       Rectangle should use length × width.
# * Create a list of shapes and call the area() method in a loop to demonstrate polymorphism.


import math

# 1. Base class
class Shape:
    def area(self):
        return 0

# 2. Child class: Circle
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

# 3. Child class: Rectangle
class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

# 4. Create a list of shapes to demonstrate polymorphism
shapes = [
    Shape(),
    Circle(5),
    Rectangle(4, 6),
    Circle(2.5),
    Rectangle(10, 3)
]

# 5. Call area() method in a loop
for shape in shapes:
    print(f"{shape.__class__.__name__} Area: {shape.area():.2f}")
