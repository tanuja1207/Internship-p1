class Circle {
  static pi = 3.14159;

  static area(radius) {
    return Circle.pi * radius * radius;
  }
}

// No need to create object
console.log(Circle.area(5));     // 78.53975
console.log(Circle.pi);          // 3.14159
