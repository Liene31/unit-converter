const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lenghtEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

function convertToFeet(value) {
  return (value * 3.28084).toFixed(3);
}

function convertToMetre(value) {
  return (value / 3.281).toFixed(3);
}

function convertToGallons(value) {
  return (value / 3.785).toFixed(3);
}

function convertToLiters(value) {
  return (value * 3.785).toFixed(3);
}

function convertToPounds(value) {
  return (value * 2.205).toFixed(3);
}

function convertToKilos(value) {
  return (value / 2.205).toFixed(3);
}

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  const feet = convertToFeet(inputValue);
  const meters = convertToMetre(inputValue);
  const gallons = convertToGallons(inputValue);
  const liters = convertToLiters(inputValue);
  const pounds = convertToPounds(inputValue);
  const kilos = convertToKilos(inputValue);

  lenghtEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;
  volumeEl.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
  massEl.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`;
});
