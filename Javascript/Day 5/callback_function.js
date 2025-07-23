function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUser(callback) {
  const userName = "Tanuja";
  callback(userName);
}

processUser(greet);
