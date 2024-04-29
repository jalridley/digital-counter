const resetButton = document.getElementById('reset-button');

function elementSetNumber(id, number) {
  const element = document.getElementById(id);
  element.textContent = number;
}

function generateRandomNumbers(numberOfElements) {
  removeAndAddAnimateClassTimer('play-button', 2000);
  for (let id = 1; id <= numberOfElements; id++) {
    const digits = id <= 4 ? 6 : 2;
    let randomNumber;

    if (digits === 2) {
      randomNumber = Math.floor(Math.random() * 11).toString();
      randomNumber = randomNumber.padStart(digits, '0');
    } else {
      randomNumber = Math.floor(
        Math.random() * Math.pow(10, digits)
      ).toString();
      randomNumber = randomNumber.padStart(digits, '0');
    }

    if (digits === 2 && randomNumber < 10) {
      randomNumber = randomNumber.padStart(2, '0');
    }

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

function removeAndAddAnimateClassTimer(id, delay) {
  const element = document.getElementById(id);
  element.classList.remove('motion-safe:animate-pulse');
  setTimeout(() => {
    element.classList.add('motion-safe:animate-pulse');
  }, delay);
}

function printScores() {
  removeAndAddAnimateClassTimer('print-button', 2000);
  window.print();
}
