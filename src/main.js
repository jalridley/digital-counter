function randomNumber(id) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = Math.floor(Math.random() * 999999)
      .toString()
      .padStart(6, "0");
  }
}

function loop(number) {
  for (let i = 1; i <= number; i++) {
    randomNumber(i);
  }
}
