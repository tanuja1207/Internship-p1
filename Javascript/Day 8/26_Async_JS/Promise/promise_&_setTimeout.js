// Function that returns a delayed promise
function fetchData() {
  const isSuccessful = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isSuccessful ? resolve() : reject();
    }, 2000);
  });
}

// Handling the promise
fetchData()
  .then(() => {
    console.log('resolved!');
  })
  .catch(() => {
    console.log('rejected!');
  });
