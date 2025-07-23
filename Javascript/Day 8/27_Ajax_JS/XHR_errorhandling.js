// XMLHttpRequest using Callback Functions (with error handling)

const URL = "https://jsonplaceholder.typicode.com/posts";

// Create a new XHR object
const xhr = new XMLHttpRequest();

// Open a GET request to fetch all posts
xhr.open("GET", URL);

// Runs when request completes
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const posts = JSON.parse(xhr.response);
    console.log("All Posts:", posts);

    // Fetch a single post using the ID of the 4th post
    const id = posts[3].id;
    const singlePostURL = `${URL}/${id}`;
    const xhr2 = new XMLHttpRequest();

    xhr2.open("GET", singlePostURL);

    xhr2.onload = () => {
      if (xhr2.status >= 200 && xhr2.status < 300) {
        const post = JSON.parse(xhr2.response);
        console.log("Single Post (ID 4):", post);
      } else {
        console.error("Error fetching single post!");
      }
    };

    xhr2.onerror = () => {
      console.error("Network error while fetching single post.");
    };

    xhr2.send();

  } else {
    console.error("Error fetching posts!");
  }
};

// Network error handling for first request
xhr.onerror = () => {
  console.error("Network error while fetching all posts.");
};

// Send the first request
xhr.send();
