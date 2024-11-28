document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


  $(document).ready(function () {
    // Service items animation on page load
    $('.service-item').css({ opacity: 0, transform: 'translateY(50px)' });
    $('.service-item').each(function (index) {
      $(this)
        .delay(index * 300) // Staggered animation
        .animate(
          { opacity: 1, top: '0px' },
          {
            duration: 1000,
            step: function (now, fx) {
              if (fx.prop === 'top') {
                $(this).css('transform', 'translateY(' + (50 - now) + 'px)');
              }
            }.bind(this),
          }
        );
    });

    // Icon bounce effect on hover
    $('.service-icon i').hover(
      function () {
        $(this).css({
          animation: 'bounce 0.5s',
        });
      },
      function () {
        $(this).css({
          animation: 'none',
        });
      }
    );

    // Skills list cascading animation on page load
    $('.skills-list li').css({ opacity: 0, transform: 'translateX(-50px)' });
    $('.skills-list li').each(function (index) {
      $(this)
        .delay(index * 200) // Staggered effect
        .animate(
          { opacity: 1, left: '0px' },
          {
            duration: 800,
            step: function (now, fx) {
              if (fx.prop === 'left') {
                $(this).css('transform', 'translateX(' + (-50 + now) + 'px)');
              }
            }.bind(this),
          }
        );
    });
  });

