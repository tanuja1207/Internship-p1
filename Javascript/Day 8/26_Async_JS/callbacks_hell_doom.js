const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Function to change text with delay
function changeText(element, text, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccess) onSuccess();
    } else {
      if (onFailure) onFailure();
    }
  }, time);
}

// Callback Hell (Pyramid of Doom)
changeText(heading1, "one", "violet", 1000, () => {
  changeText(heading2, "two", "purple", 1000, () => {
    changeText(heading3, "three", "red", 1000, () => {
      changeText(heading4, "four", "pink", 1000, () => {
        changeText(heading5, "five", "green", 1000, () => {
          changeText(heading6, "six", "blue", 1000, () => {
            changeText(heading7, "seven", "cyan", 1000, () => {
              changeText(heading8, "eight", "#cda562", 1000, () => {
                changeText(heading9, "nine", "#dca652", 1000, () => {
                  changeText(heading10, "ten", "brown", 1000, null, () => {
                    console.log("Error: heading10");
                  });
                }, () => console.log("Error: heading9"));
              }, () => console.log("Error: heading8"));
            }, () => console.log("Error: heading7"));
          }, () => console.log("Error: heading6"));
        }, () => console.log("Error: heading5"));
      }, () => console.log("Error: heading4"));
    }, () => console.log("Error: heading3"));
  }, () => console.log("Error: heading2"));
}, () => console.log("Error: heading1"));
