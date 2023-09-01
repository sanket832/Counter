const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const countElement = document.getElementById("count");

let count = 0;

function updateCounter() {
  countElement.textContent = count;
}

decreaseButton.addEventListener("click", () => {
  count--;
  updateCounter();
});

increaseButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

updateCounter();