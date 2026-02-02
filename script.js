let messageIndex = 0;

const messages = [
  "Are you sure? 🥺",
  "Pleaseee 💔",
  "Think again 😭",
  "Don’t break my heart 💘"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const size = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${size + 6}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
