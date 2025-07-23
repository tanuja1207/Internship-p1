let count = 10;
const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
  timerDisplay.textContent = count;
  count--;

  if (count < 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "⏰";
  }
}, 1000);
