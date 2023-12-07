// Getting the button
const buttonLetter = document.querySelectorAll(".sort--button");
const mangaList = document.querySelectorAll(".manga--list");

// Toggle visibility

buttonLetter.forEach((button) => {
  button.addEventListener("click", displayManga);
});

function displayManga(event) {
  const button = event.currentTarget;
  const letterToDisplay = button.dataset.componentLetterButton.toLowerCase();

  mangaList.forEach((manga) => {
    const mangaLetterButton = manga.dataset.componentListLetter.toLowerCase();

    if (mangaLetterButton.startsWith(letterToDisplay)) {
      manga.classList.add("manga--visible");
    } else {
      manga.classList.remove("manga--visible");
    }
  });
}
