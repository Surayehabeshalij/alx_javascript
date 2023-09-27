function generateInputFields(selectedValue) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear any existing input fields
  
    for (var i = 1; i <= selectedValue; i++) {
      var inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = 'field' + i;
      inputField.placeholder = 'Field ' + i;
  
      inputContainer.appendChild(inputField);
      inputContainer.appendChild(document.createElement('br'));
    }
  }
  
  function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    var inputFields = document.querySelectorAll('#inputContainer input');
  
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() === '') {
        var errorElement = document.getElementById('error');
        errorElement.textContent = 'Please fill in all fields.';
        return false;
      }
    }
  
    // If all fields are filled, allow form submission
    return true;
  }
  
  // Get the dropdown menu element and attach the event listener for changes
  var numFieldsDropdown = document.getElementById('numFields');
  numFieldsDropdown.addEventListener('change', function(event) {
    var selectedValue = parseInt(event.target.value);
    generateInputFields(selectedValue);
  });
  
  // Get the form element and attach the event listener for form submission
  var form = document.getElementById('dynamicForm');
  form.addEventListener('submit', validateForm);