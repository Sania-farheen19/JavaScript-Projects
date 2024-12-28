const images = ["A", "B", "C", "D", "A", "B", "C", "D"];
images.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("game-board");

images.forEach((Image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.image = Image;
  card.textContent = "?";
  gameBoard.appendChild(card);
});

let firstCard = null;
let secondCard = null;
let lockBoard = false;

gameBoard.addEventListener("click", (e) => {
  const card = e.target;

  // Ensure the clicked card is valid
  if (!card.classList.contains("card") || lockBoard || card === firstCard)
    return;

  flipCard(card);

  if (!firstCard) {
    firstCard = card; // Save first flipped card
  } else {
    secondCard = card; // Save second flipped card
    checkForMatch();
  }
});

function flipCard(card) {
  card.textContent = card.dataset.image; // Show the image
  card.classList.add("flipped");
}
function checkForMatch() {
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  if (isMatch) {
    // Cards match, keep them flipped
    resetTurn();
  } else {
    // Cards don't match, flip them back
    lockBoard = true;
    setTimeout(() => {
      firstCard.textContent = "?";
      secondCard.textContent = "?";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
