// Repeats a task every 1 second
console.log("Script Start");

setInterval(() => {
  console.log(Math.random());
}, 1000);

console.log("Script End");


// Interval with CPU-intensive task
console.log("Script Start");

setInterval(() => {
  let total = 0;
  for (let i = 1; i < 100000000; i++) {
    total += i;
  }
  console.log("Sum:", total);
  console.log("Random:", Math.random());
}, 1000);

console.log("Script End");
