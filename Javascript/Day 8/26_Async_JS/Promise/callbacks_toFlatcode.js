// Select all heading elements
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

// Function to change text and color with delay
function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject('Element Not Found!');
      }
    }, time);
  });
}

// Chain of Promises to update each heading one by one
changeText(heading1, 'one', 'violet', 1000)
  .then(() => changeText(heading2, 'two', 'purple', 1000))
  .then(() => changeText(heading3, 'three', 'red', 1000))
  .then(() => changeText(heading4, 'four', 'pink', 1000))
  .then(() => changeText(heading5, 'five', 'green', 1000))
  .then(() => changeText(heading6, 'six', 'cyan', 2000))
  .then(() => changeText(heading7, 'seven', 'cyan', 2000))
  .then(() => changeText(heading8, 'eight', '#cda562', 2000))
  .then(() => changeText(heading9, 'nine', '#dca652', 2000))
  .then(() => changeText(heading10, 'ten', 'brown', 1000))
  .catch((error) => alert(error));
