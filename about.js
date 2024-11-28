document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

$(document).ready(function() {
  // Initially position the image off-screen to the left
  $("#henishimg").css({
    position: "relative", // Required for animation
    left: "-100%" // Start fully off-screen to the left
  });

  // Animate the image from left to right on page load
  $("#henishimg").animate({
    left: "0" // Move to its original position
  }, 800); // Duration of the animation in milliseconds
});


  $(document).ready(function() {
    // Initially position the bio-details off-screen to the right
    $(".bio-details").css({
      position: "relative", // Required for animation
      right: "-100%" // Start completely off-screen to the right
    });

    // Animate the bio-details section from right to left on page load
    $(".bio-details").animate({
      right: "0" // Move to its original position
    }, 800); // Animation duration (2000ms = 2 seconds)
  });



