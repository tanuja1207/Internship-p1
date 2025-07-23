// Main function
const app = () => {

  // Function inside app
  const myFunction = () => {
    console.log("Inside myFunction");
  };

  // Function to add two numbers
  const addition = (num1, num2) => {
    return num1 + num2;
  };

  // Function to multiply two numbers
  const multiply = (num1, num2) => num1 * num2;

  // Calling inner functions
  console.log("Inside app");
  myFunction();
  console.log("Addition:", addition(5, 3));
  console.log("Multiplication:", multiply(5, 3));
};

// Call the main function
app();
