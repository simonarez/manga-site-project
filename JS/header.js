//This file is code for making the drop-down menu functional

// Getting the button
const button = document.querySelector(".drop-down__menu--button");
const dropdownContainer = document.querySelector(
  ".drop-down--element__container"
);

// Toggle visibility of the dropdown menu when the button is clicked
button.addEventListener("click", function () {
  dropdownContainer.classList.toggle("drop-down__visible");
});

// Close the dropdown menu if clicked outside of it
document.addEventListener("click", function (event) {
  if (!dropdownContainer.contains(event.target) && event.target !== button) {
    dropdownContainer.classList.remove("drop-down__visible");
  }
});
