// Function returns a resolved Promise
function fetchData() {
  return Promise.resolve("foo");
}

// Promise chaining
fetchData()
  .then((result) => {
    console.log(result); // "foo"
    return result + "bar"; // equivalent to: return Promise.resolve("foobar");
  })
  .then((result) => {
    console.log(result); // "foobar"
    return result + "baaz";
  })
  .then((result) => {
    console.log(result); // "foobarbaaz"
  });
