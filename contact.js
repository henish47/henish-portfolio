  document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });

  $(document).ready(function () {
    $("#contactme").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          number: true,
          minlength: 10,
        },
        message: {
          required: true,
          maxlength: 100, // Corrected from `maximumLength` to `maxlength`
        },
      },
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "Enter a name with at least 2 characters",
        },
        email: {
          required: "Please enter a valid email address",
        },
        phone: {
          required: "Please enter a valid phone number",
          minlength: "Phone number must be 10 digits long",
          number: "Please enter a valid phone number",
        },
        message: {
          required: "Please enter a message",
          maxlength: "Please enter a message with a maximum length of 100 characters",
        },
      },
      submitHandler: function (form) {
        // Triggered on successful validation
        alert("Your message is sent!");
        form.reset(); // Optional: Reset the form after submission
      },
    });
  });
  
  