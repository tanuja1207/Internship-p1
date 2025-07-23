const body = document.body;

// Start changing background color every second
const intervalID = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green},${blue})`;
  console.log(rgb);
  body.style.backgroundColor = rgb;
}, 1000);

console.log("Interval ID:", intervalID);

// Stop button
const stopButton = document.querySelector("button");

stopButton.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(intervalID); // ❗Corrected from clearTimeout to clearInterval
  stopButton.textContent = body.style.backgroundColor;
});
