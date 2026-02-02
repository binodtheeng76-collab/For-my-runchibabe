let messageIndex = 0;  

// Messages for No button
const messages = ["Try again!", "Nope!", "Really?", "Keep clicking!"];

function handleNoClick() {  
  const noButton = document.querySelector('.no-button');  
  const yesButton = document.querySelector('.yes-button');  

  // Change No button text
  noButton.textContent = messages[messageIndex];  

  // Move to next message
  messageIndex = (messageIndex + 1) % messages.length;  

  // Make Yes button bigger
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);  
  yesButton.style.fontSize = `${currentSize * 1.5}px`;  
}  

function handleYesClick() {  
  // Redirect when Yes is clicked
  window.location.href = "yes_page.html";  
}
