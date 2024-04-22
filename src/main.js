function elementSetText(id, number) {
  const element = document.getElementById(id);
  element.textContent = number;
}

function randomNumber(id) {
  const randomNumber = Math.floor(Math.random() * 999999)
    .toString()
    .padStart(6, '0');
  elementSetText(id, randomNumber);
}

function resetToZero(id, number = '000000') {
  elementSetText(id, number);
}

function play(number) {
  for (let i = 1; i <= number; i++) {
    randomNumber(i);
  }
}

function reset(number) {
  for (let i = 1; i <= number; i++) {
    resetToZero(i);
  }
}
