document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
  
    form.addEventListener("submit", function(event){
        event.preventDefault();
  
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
  
        let isValid = true;
        let messages = [];
  
        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Your username needs to be more than 3 characters");
        }
  
        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Enter a valid email");
        }
  
        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Your password must have at least 8 characters");
        }
  
        // Feedback display
        feedbackDiv.style.display = "block";
  
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            form.reset(); // Reset form only on successful submission
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
  });