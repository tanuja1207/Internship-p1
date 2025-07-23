// XMLHttpRequest using Promises

const URL = "https://jsonplaceholder.typicode.com/posts";

// Generic function to send an HTTP request
function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong!"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error or server down."));
    };

    xhr.send();
  });
}

// Consuming the promise
sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    console.log("All Posts:", data);
    const id = data[4].id;
    return sendRequest("GET", `${URL}/${id}`);
  })
  .then((response) => {
    const singlePost = JSON.parse(response);
    console.log("Post with ID 5:", singlePost);
  })
  .catch((error) => {
    console.error(error);
  });
