// Callback Example
function myFunc(callback) {
  console.log("Task 1 complete");
  callback();
}

function myFunc2() {
  console.log("Task 2 complete");
}

myFunc(myFunc2); // Passing function as an argument

// Anonymous Function as Callback
myFunc(function () {
  console.log("Task 3 complete");
});

// Arrow Function as Callback
myFunc(() => {
  console.log("Task 4 complete");
});

// --------------------------------------------

// Callback with arguments
function getTwoNumbersAndAdd(num1, num2, callback) {
  console.log(num1, num2);
  callback(num1, num2);
}

function addTwoNumbers(n1, n2) {
  console.log(n1 + n2);
}

getTwoNumbersAndAdd(4, 5, addTwoNumbers);

// --------------------------------------------

// Callback with input validation
function getTwoNumbersAndAddV2(num1, num2, callback) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    callback(num1, num2);
  } else {
    alert("Invalid Input!");
  }
}

getTwoNumbersAndAddV2(4, 5, (n1, n2) => {
  console.log(n1 + n2);
});

// --------------------------------------------

// Success and Failure callbacks
function getTwoNumbersAndAddV3(num1, num2, onSuccess, onFailure) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onFailure();
  }
}

getTwoNumbersAndAddV3(
  4,
  "5",
  (n1, n2) => {
    console.log(n1 + n2);
  },
  () => {
    alert("Invalid input!");
    console.log("Enter valid numbers");
  }
);
