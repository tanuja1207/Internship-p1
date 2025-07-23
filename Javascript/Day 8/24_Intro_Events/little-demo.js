console.log("hello");

const mainButton = document.querySelector(".container button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");

// Generate a random RGB color
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

// Change background color and display it
mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
