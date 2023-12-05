const mangaListNames = [
  "Attack on Titan",
  "Akame Ga Kill",
  "Akira",
  "Assassination Classroom",
  "Berserk",
  "Bleach",
  "Bullbuster",
  "Cencoroll",
  "Chainsaw Man",
  "Devilman Crybaby",
  "Demon Slayer",
  "Ergo Proxy",
  "Erased",
];

function displayNames(letter) {
  const filteredNames = names.filter((name) =>
    name.toLowerCase().startsWith(letter)
  );

  const nameList = document.getElementById("nameList");

  nameList.innerHTML = filteredNames
    .map((name) => `<li class="manga--list__item">${name}</li>`)
    .join("");

  // Event listeners for each button clicked
  const buttons = document.querySelectorAll(".sort--button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const clickedLetter = event.target.textContent.toLowerCase();
      displayNames(clickedLetter);
    });
  });
}

console.log("Poop");
