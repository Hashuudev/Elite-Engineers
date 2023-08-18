$(function () {
  "use strict";

  /*=====================================================================
        01: Background image
    ======================================================================*/
  let imageTarget = $("[data-img]");
  imageTarget.css("background", function () {
    return "url(" + this.getAttribute("data-img") + ") no-repeat center";
  });
  imageTarget.css("backgroundSize", "cover");

  /*=====================================================================
        02: Menu
    ======================================================================*/
  $('.header-menu a[href="#"]').on("click", function (e) {
    e.preventDefault();
  });

  $(".header-menu").menumaker({
    title: '<i class="fas fa-bars"></i>',
    format: "multitoggle",
  });

  /*================================================================
      03: Preloader
    =================================================================*/
  $(document).ready(function () {
    setTimeout(() => {
      $(".preloader").fadeOut();
    }, 250);
  });

  /*=====================================================================
        04: Scroll to top button
    =======================================================================*/
  $(".top-btn").on("click", function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).on("scroll", function () {
    var $scroll = $(this).scrollTop();

    if ($scroll > 300) {
      $(".top-btn").addClass("show");
    } else {
      $(".top-btn").removeClass("show");
    }
  });

  /*=====================================================================
        05: Sticky menu
    ======================================================================*/
  function menuSticky() {
    var $scroll = $(window).scrollTop();
    if ($scroll > 120) {
      $(".menubar").addClass("sticky");
    } else {
      $(".menubar").removeClass("sticky");
    }
  }
  menuSticky();
  $(window).on("scroll", function () {
    menuSticky();
  });

  /*=====================================================================
        06: Venobox video play
    ======================================================================*/
  $(".venobox").venobox();

  /*======================================================================
        07: Project image show
    =======================================================================*/

  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*=====================================================================
        08: Project filtering
    ======================================================================*/
  let mixer = document.querySelector(".filters");
  if (mixer) {
    mixitup(".filters", {
      selectors: {
        control: "[data-mixitup-control]",
      },
    });
  }

  $(".project-menu li").click(function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  /*=====================================================================
        09: client slider
    ======================================================================*/
  var clientSwiper = new Swiper(".client-slider", {
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: false,
    spaceBetween: 30,
    autoPlay: 3000,
    breakpoints: {
      1920: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    controller: {
      control: clientImgSwiper,
    },
    // navigation: {
    //     nextEl: ".client-button-next",
    //     prevEl: ".client-button-prev",

    //   },
  });
  var clientImgSwiper = new Swiper(".client-img-slider", {
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: false,
    spaceBetween: 30,
    autoPlay: 3000,
    breakpoints: {
      1920: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    controller: {
      control: clientSwiper,
    },
    navigation: {
      nextEl: ".client-button-next",
      prevEl: ".client-button-prev",
    },
  });

  /*=====================================================================
        10: footer time slider
    ======================================================================*/
  var swiper = new Swiper(".time-slider", {
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: false,
    spaceBetween: 30,
    autoPlay: 3000,
    breakpoints: {
      1920: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=====================================================================
        11: counterup
    ======================================================================*/
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

  /*=====================================================================
        12: scroll animation
    ======================================================================*/

  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
  });
  wow.init();
});
