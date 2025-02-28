const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lenghtEl = document.querySelector("#length-el");

function convertToFeet(value) {
  return (value * 3.28084).toFixed(3);
}

function convertToMetre(value) {
  return (value / 3.281).toFixed(3);
}

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  let feet = convertToFeet(inputValue);
  let meters = convertToMetre(inputValue);
  lenghtEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;
  console.log(convertToMetre(inputValue));
});
