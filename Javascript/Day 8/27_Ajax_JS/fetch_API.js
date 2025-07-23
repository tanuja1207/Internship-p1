// URL for JSONPlaceholder
const URL = "https://jsonplaceholder.typicode.com/posts";

// Making a POST request with fetch API
const promise = fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

// Handling the response
promise
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong!");
    }
  })
  .then((data) => {
    console.log("Response data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
