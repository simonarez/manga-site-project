const buttonLetter = document.querySelectorAll(".sort--button");
const mangaList = document.querySelectorAll(".manga--list");

buttonLetter.forEach((button) => {
  button.addEventListener("mouseenter", displayManga);
  //   button.addEventListener("mouseenter", overviewButtonsActive);
});

const overviewButtons = document.querySelectorAll(".sort--button");
const components = document.querySelectorAll(".manga--list");

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
