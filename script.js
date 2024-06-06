
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbw3qw2zio4qJ55y_raFcdcThQLDzqLKbXpX5ynju4wgHDGXs5FQc6lH8toMNSALHshrVw/exec'
        // const form = document.forms['submit-to-google-sheet']
        // const success= document.getElementById('message3');
    
        // form.addEventListener('submit', e => {
        //     e.preventDefault()
        //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //         .then(response => {
        //             success.innerHTML="Data successfully sent";

        //             setTimeout(function()
        //         {
        //             success.innerHTML="";
        //             location.reload();
        //         },5000)
               
        //         })
        //         .catch(error => console.error('Error!', error.message))
        // })

        // const  form = document.getElementById("form");
        // const username = document.getElementById('username');
        // const email = document.getElementById('email')
        // const message = document.getElementById("message")

        // form.addEventListener("submit", e => {
        //     e.preventDefault();
        //     validateInput();
        // })

        // const setError = (element, message) => {
        //     const inputControl = element.parentElement;
        //     const errorDisplay = inputControl.querySelector(".error");

        //     errorDisplay.innerText = message;
        //     inputControl.classlist.add("error");
        //     inputControl.classList.remove("success");
        // }

        // const validateInput = () => {
        //     const usernameValue = username.value.trim();
        //     const emailValue = email.value.trim();
        //     const messageValue = message.value.trim();

        //     if(usernameValue === ""){
        //         setError(username, "Username is required");
        //     }else{
        //         setSuccess(username);
        //     }

        //     if (emailValue === ""){
        //         setError(email, "Email is required");
        //     }else{
        //         setSuccess(email);
        //     }

        //     if(messageValue === ''){
        //         setError(message,"Enter the message you want to send")
        //     }else{
        //         setSuccess(message);
        //     }
        // }


// const form = document.getElementById('submit-to-google-sheet');
// const emailInput = document.getElementById('email4');
// const nameInput = document.getElementById('name4');
// const messageInput = document.getElementById('message4');

// const emailError = emailInput.nextElementSibling.querySelector('.error');
// const nameError = nameInput.nextElementSibling.querySelector('.error');
// const messageError = messageInput.nextElementSibling.querySelector('.error');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission

//   let isValid = true;

//   // Email validation (replace with a more robust validation library if needed)
//   if (!isValidEmail(emailInput.value)) {
//     emailError.textContent = "Please enter a valid email address.";
//     emailError.parentElement.classList.add('error'); // Add error class to parent element for styling
//     isValid = false;
//   } else {
//     emailError.textContent = "";
//     emailError.parentElement.classList.remove('error'); // Remove error class on success
//   }

//   // Name validation (check if empty)
//   if (nameInput.value.trim() === '') {
//     nameError.textContent = "Please enter your name.";
//     nameError.parentElement.classList.add('error');
//     isValid = false;
//   } else {
//     nameError.textContent = "";
//     nameError.parentElement.classList.remove('error');
//   }

//   // Message validation (check if empty)
//   if (messageInput.value.trim() === '') {
//     messageError.textContent = "Please enter a message.";
//     messageError.parentElement.classList.add('error');
//     isValid = false;
//   } else {
//     messageError.textContent = "";
//     messageError.parentElement.classList.remove('error');
//   }

//   if (isValid) {
//     // Form is valid, submit the form (no further action needed here)
//   }
// });

// // Function to validate email format (replace with a more robust validation library if needed)
// function isValidEmail(email) {
//   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return emailRegex.test(email);
// }
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  } else {
    // You can add further logic here to submit the form data (e.g., using AJAX)
    alert('Form submitted successfully!');
  }
});