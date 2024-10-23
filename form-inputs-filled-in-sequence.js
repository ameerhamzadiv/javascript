 document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form[data-form-id="2705"]');
  const inputs = form.querySelectorAll('input');
  const errorMessage = document.getElementById('error-message');
console.log(form);

 // Only the specific inputs that should be filled in order
  const requiredInputs = [
    document.getElementById("car"),
    document.getElementById('pickup_address'),
    document.getElementById('drop_off_address')
  ];

  requiredInputs.forEach((input, index) => {
    input.addEventListener('focus', function () {
      // Check if all previous inputs have values
      for (let i = 0; i < index; i++) {
        if (requiredInputs[i].value.trim() === '') {
          //errorMessage.textContent = `Please fill the input ${i + 1} before moving to the next one.`;
          console.log(`Please fill the input ${requiredInputs[i].id} before moving to the next one.`);
          requiredInputs[i].focus(); // Focus back to the previous unfilled input
          break;
        } else {
          //errorMessage.textContent = ''; // Clear error message if no errors
        }
      }
    });
  });
  
  form.addEventListener('submit', function (event) {
    // Prevent form submission if there are unfilled inputs
    let allFilled = true;
    requiredInputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
        //errorMessage.textContent = 'Please fill out all the inputs in sequence.';
        console.log(`Please fill out ${input.id} before submitting the form.`);
        input.focus();
        return;
      }
    });

    if (!allFilled) {
      event.preventDefault(); // Prevent form submission if not all inputs are filled
    }
  });
});
