
// AJAX: Asynchronous JavaScript and XML

// ===============================
// Common Ways to Make HTTP Requests in JS:
// ===============================
// 1. XMLHttpRequest (old way)
// 2. Fetch API (modern, built-in)
// 3. Axios (third-party library)

// ===============================
//  Fetch API (GET Request)
// ===============================

const URL = "https://jsonplaceholder.typicode.com/posts";

// Making a GET request using Fetch API
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      // If HTTP status code is not 2xx, throw an error
      throw new Error("Network response was not OK");
    }
    return response.json(); // Parse JSON data from response
  })
  .then((data) => {
    console.log("Fetched Data:", data); // Output the data
  })
  .catch((error) => {
    console.error("Fetch Error:", error); // Handle errors
  });

// ===============================
//  Fetch API (POST Request)
// ===============================

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("POST request failed");
    }
    return response.json();
  })
  .then((data) => {
    console.log("POST Response:", data);
  })
  .catch((error) => {
    console.error("POST Error:", error);
  });

