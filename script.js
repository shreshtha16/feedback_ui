// script.js
document.addEventListener("DOMContentLoaded", () => {
    const feedbackOptions = document.querySelectorAll(".feedback-option");
    const sendFeedbackButton = document.getElementById("sendFeedback");
    const feedbackCard = document.getElementById("feedbackCard");
    const thankYouCard = document.getElementById("thankYouCard");
    const selectedFeedbackDisplay = document.getElementById("selectedFeedback");
    let selectedFeedback = null;
  
    feedbackOptions.forEach(option => {
      option.addEventListener("click", () => {
        // Deselect all options and highlight the clicked one
        feedbackOptions.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
  
        // Update selected feedback and enable the button
        selectedFeedback = option.dataset.feedback;
        sendFeedbackButton.disabled = false;
      });
    });
  
    sendFeedbackButton.addEventListener("click", () => {
      if (selectedFeedback) {
        // Update the thank you message with the selected feedback
        selectedFeedbackDisplay.innerText = selectedFeedback;
  
        // Show the thank-you card and hide the feedback card
        feedbackCard.style.display = "none";
        thankYouCard.style.display = "block";
      }
    });
  });
  