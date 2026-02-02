let messageIndex = 0;
let noClicks = 0;

const messages = [
  "Are you sure? 🥺",
  "Pleaseee 💔",
  "Think again 😭",
  "Don’t break my heart 💘",
  "Come on 💖",
  "I won’t give up 😈"
];

function handleNoClick() {
  noClicks++;
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // change text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // grow yes button
  const size = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${size + 6}px`;

  // move No button randomly after 6 clicks
  if (noClicks >= 6) {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noClicks = 0; // reset counter
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
