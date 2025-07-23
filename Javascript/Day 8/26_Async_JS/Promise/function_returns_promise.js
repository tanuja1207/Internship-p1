// Ingredients available
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// Function that returns a Promise for cooking fried rice
function friedRicePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes('vegetables') &&
      bucket.includes('rice') &&
      bucket.includes('salt')
    ) {
      resolve({ value: 'Fried Rice' });
    } else {
      reject(new Error('Something is missing in the bucket'));
    }
  });
}

// Consume the Promise
friedRicePromise()
  .then((myFriedRice) => {
    console.log('Let’s eat my', myFriedRice);
  })
  .catch((error) => {
    console.log(error);
  });
