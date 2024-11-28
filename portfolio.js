document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });


  $(document).ready(function () {
    // Set initial opacity of all portfolio items to 0 (fully transparent)
    $(".portfolio-item").css("opacity", "0");

    // Animate opacity from 0 to 1 (fully visible) when the page loads
    $(".portfolio-item").each(function (index) {
      $(this).delay(index * 300).fadeTo(1000, 1); // Delay increases for each item
    });
  });


