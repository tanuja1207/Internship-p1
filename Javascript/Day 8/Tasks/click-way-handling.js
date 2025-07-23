/*
Create 3 buttons: “Way 1”, “Way 2”, “Way 3”
Use:
Inline HTML onclick=""
JS: element.onclick
JS: element.addEventListener("click", ...)
On click: log message + change background to green (then revert)
*/

// Way 1: Inline onclick
function handleInlineClick(btn) {
  console.log("Way 1 clicked!");
  changeBackgroundTemporarily(btn);
}

// Way 2: element.onclick
const btn2 = document.getElementById("way2");
btn2.onclick = function () {
  console.log("Way 2 clicked!");
  changeBackgroundTemporarily(this);
};

// Way 3: addEventListener
const btn3 = document.getElementById("way3");
btn3.addEventListener("click", function () {
  console.log("Way 3 clicked!");
  changeBackgroundTemporarily(this);
});

// Helper function to change background color temporarily
function changeBackgroundTemporarily(element) {
  element.style.backgroundColor = "green";
  setTimeout(() => {
    element.style.backgroundColor = "";
  }, 500);
}
