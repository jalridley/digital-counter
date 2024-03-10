// if number has less that 6 digits, add leading zeros
const randomNumber = (document.getElementById("1").innerHTML = Math.floor(
  Math.random() * 999999
)
  .toString()
  .padStart(6, "0"));
