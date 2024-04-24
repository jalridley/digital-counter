const resetButton = document.getElementById('reset-button');

function elementSetNumber(id, number) {
  const element = document.getElementById(id);
  element.textContent = number;
}

function randomNumber(id) {
  const randomNumber = Math.floor(Math.random() * 999999)
    .toString()
    .padStart(6, '0');
  elementSetNumber(id, randomNumber);
  resetButton.classList.add('motion-safe:animate-pulse');
}

function resetToZero(elementCount) {
  for (let id = 1; id <= elementCount; id++) {
    elementSetNumber(id, '000000');
  }
  resetButton.classList.remove('motion-safe:animate-pulse');
}

function play(number) {
  removeAnimateClassTimer('play-button', 2000);
  for (let i = 1; i <= number; i++) {
    randomNumber(i);
  }
}

function removeAnimateClassTimer(id, delay) {
  const element = document.getElementById(id);
  element.classList.remove('motion-safe:animate-pulse');
  setTimeout(() => {
    element.classList.add('motion-safe:animate-pulse');
  }, delay);
}
