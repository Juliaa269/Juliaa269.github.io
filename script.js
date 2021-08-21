$(document).ready(function () {
  const menu = $('.menu');
  const mobileMenu = $('.mobile-menu');
  const burgerBtn = $('.mobile-menu__btn');
  const slider = $('.slider');

  $('a[href^="#"]').click(function () {
    if (document.getElementById($(this).attr('href').substr(1)) !== null) {
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
      );
    }

    if (menu.hasClass('active')) {
      menu.removeClass('active');
      burgerBtn.removeClass('mobile-menu__btn_active');
      $('body').css('overflow', 'auto');
    }

    return false;
  });

  mobileMenu.click(() => {
    burgerBtn.toggleClass('mobile-menu__btn_active');
    menu.toggleClass('active');

    if (menu.hasClass('active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  });

  slider.slick({
    arrows: false,
    dots: true,
    speed: 250,
    easing: 'ease',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 250,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    touchMove: true,
    swipe: true,
  });
});
