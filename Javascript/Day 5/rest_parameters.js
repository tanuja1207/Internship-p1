function printStudents(className, ...students) {
    console.log(`Class: ${className}`);
    console.log("Students:");
    for (let name of students) {
        console.log(name);
    }
}

// Calling the function with multiple student names
printStudents("Web Development", "Tanuja", "Sneha", "Rushi", "Sanu");
