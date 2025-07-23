// Basic XHR (XMLHttpRequest) GET request example

const url = "https://jsonplaceholder.typicode.com/posts";

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Initialize a GET request
xhr.open("GET", url);

// Handle the response when readyState is 4 (DONE)
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse and log the JSON response
    const data = JSON.parse(xhr.response);
    console.log("Fetched Data:", data);
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// Send the HTTP request
xhr.send();
