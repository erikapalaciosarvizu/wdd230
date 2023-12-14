document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
  
    form.addEventListener('submit', function (event) {

      var emailPattern = /[a-zA-Z0-9._%+-]+@byui\.edu$/;
      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); 
        emailError.textContent = 'Please enter a valid email address from @byui.edu domain.';
      } else {
        emailError.textContent = ''; 
      }
    });

    const ratingInput = document.getElementById('pageRating');
    const ratingValue = document.getElementById('ratingValue');

    ratingInput.addEventListener('input', function () {
        ratingValue.textContent = ratingInput.value;
    });
  });
  