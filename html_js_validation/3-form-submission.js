function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
  
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
  
    var errorElement = document.getElementById('error');
    var successElement = document.getElementById('success');
  
    // Validate the form fields
    if (name === '' || email === '') {
      errorElement.textContent = 'Please fill in all required fields.';
      successElement.textContent = '';
    } else {
      // Clear any existing error message
      errorElement.textContent = '';
  
      // Display success message
      successElement.textContent = 'Form submitted successfully!';
      // You can also submit the form to a server using AJAX or other techniques.
      // In this example, we are just displaying a success message without actually submitting the form.
    }
  }
  
  // Get the form element and attach the event listener for form submission
  var form = document.getElementById('submitForm');
  form.addEventListener('submit', handleFormSubmit);