// Ingredients available in the bucket (salt is missing)
const bucket = ['coffee', 'chips', 'vegetables', , 'rice'];

// Function that returns a Promise to make fried rice
function makeFriedRice() {
  return new Promise((resolve, reject) => {
    // Check if required ingredients are present
    if (
      bucket.includes('vegetables') &&
      bucket.includes('rice') &&
      bucket.includes('salt')
    ) {
      resolve('Fried Rice is ready!');
    } else {
      reject('Cannot make Fried Rice: Missing ingredients');
    }
  });
}

// Consume the promise
makeFriedRice()
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
