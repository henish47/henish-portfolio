document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


$(document).ready(function() {
    // Hover Animation on About Section
    $(".about-section").hover(
      function() {
        // On hover in (mouse enters)
        $(this).animate({
          opacity: 0.8,
          marginTop: "-10px"  // Slightly moves up the section
        }, 300); // Duration of the animation (300ms)
      },
      function() {
        // On hover out (mouse leaves)
        $(this).animate({
          opacity: 1,
          marginTop: "0px"  // Resets back to the original position
        }, 300); // Duration of the animation (300ms)
      }
    );
  });


  $(document).ready(function() {
    // Initially hide the service items
    $(".service-item").css({
      opacity: 0,
      transform: "translateY(50px)"  // Move them down initially
    });

    // Scroll animation for service items
    $(window).scroll(function() {
      // Check if the services section is in the viewport
      $(".service-item").each(function() {
        var elementOffset = $(this).offset().top;
        var windowHeight = $(window).scrollTop() + $(window).height();

        // If the element is in the viewport, animate it
        if (windowHeight > elementOffset + 100) {
          $(this).animate({
            opacity: 1,
            transform: "translateY(0px)"  // Bring it back to the original position
          }, 800);  // Animation duration
        }
      });
    });
  });

  $(this).delay(300 * index).animate({
    opacity: 1,
    transform: "translateY(0px)"
  }, 800);
  

  $(document).ready(function() {
    // Initially hide the portfolio items
    $(".portfolio-item").css({
      opacity: 0,
      transform: "translateY(50px)"  // Move them down initially
    });

    // Scroll animation for portfolio items
    $(window).scroll(function() {
      // Check if each portfolio item is in the viewport
      $(".portfolio-item").each(function() {
        var elementOffset = $(this).offset().top;
        var windowHeight = $(window).scrollTop() + $(window).height();

        // If the element is in the viewport, animate it
        if (windowHeight > elementOffset + 100) {
          $(this).animate({
            opacity: 1,
            transform: "translateY(0px)"  // Bring it back to the original position
          }, 800);  // Duration of the animation (800ms)
        }
      });
    });
  });





  