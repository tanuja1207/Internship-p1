console.log("Script Start");

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// Create a Promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes('vegetables') &&
    bucket.includes('rice') &&
    bucket.includes('salt')
  ) {
    resolve({ value: "Fried Rice" });
  } else {
    reject(new Error("Missing ingredients"));
  }
});

// Consume the Promise
friedRicePromise
  .then((result) => {
    console.log("Let's eat", result);
  })
  .catch((error) => {
    console.log(error);
  });

// SetTimeout - goes to Callback Queue
setTimeout(() => {
  console.log("Execution of setTimeout");
}, 0);

// Sync Code
for (let i = 0; i <= 100; i++) {
  console.log(Math.random(), i);
}

console.log("Script End");
