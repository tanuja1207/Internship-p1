console.log("Script Start");

const URL = "https://jsonplaceholder.typicode.com/posts";

// Async function to fetch data using await
const getPosts = async () => {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();
  return data;
};

// Consuming the Promise
getPosts()
  .then(data => console.log(data))
  .catch(error => console.error(error));

console.log("Script End");
