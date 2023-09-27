function validateEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    var email = document.getElementById('email').value;
  
    // Define the regular expression for email format validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Check if the email follows the standard email format
    if (!emailRegex.test(email)) {
      document.getElementById('error').textContent = 'Please enter a valid email address.';
      return false;
    }
  
    // If the email format is correct, allow form submission
    return true;
  }
  
  // Get the form element and attach the event listener for form submission
  var form = document.getElementById('emailForm');
  form.addEventListener('submit', validateEmail);