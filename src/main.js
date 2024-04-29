const resetButton = document.getElementById('reset-button');

function elementSetNumber(id, number) {
  const element = document.getElementById(id);
  element.textContent = number;
}

function generateRandomNumbers(numberOfElements) {
  removeAnimateClassTimer('play-button', 2000);
  for (let id = 1; id <= numberOfElements; id++) {
    const digits = id <= 4 ? 6 : 2;
    let randomNumber = Math.floor(
      Math.random() * Math.pow(10, digits)
    ).toString();
    randomNumber = randomNumber.padStart(digits, '0');

    elementSetNumber(id, randomNumber);
  }
  resetButton.classList.add('motion-safe:animate-pulse');
}

function resetToZero(elementCount = 6) {
  for (let id = 1; id <= elementCount; id++) {
    elementSetNumber(id, id <= 4 ? '000000' : '00');
  }
  resetButton.classList.remove('motion-safe:animate-pulse');
}

function removeAnimateClassTimer(id, delay) {
  const element = document.getElementById(id);
  element.classList.remove('motion-safe:animate-pulse');
  setTimeout(() => {
    element.classList.add('motion-safe:animate-pulse');
  }, delay);
}

function printScores() {
  removeAnimateClassTimer('print-button', 2000);
  window.print();
}
