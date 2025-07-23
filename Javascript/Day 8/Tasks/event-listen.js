const button = document.getElementById("clickBtn");
const counterSpan = document.getElementById("counter");
let count = 0;

// First listener: increment the counter
button.addEventListener("click", function () {
  count++;
  counterSpan.textContent = count;
});

// Second listener: log event details
button.addEventListener("click", function (event) {
  console.log("Event Type:", event.type);
  console.log("Timestamp:", event.timeStamp);
  console.log("Tag Name:", this.tagName); // this refers to the <button>
});
