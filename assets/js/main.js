jQuery(document).ready(function($) {
    $('.sliders').slick({
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,

  prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='assets/img/icons/arrow_left.svg' alt='prev'></button>",
  nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='assets/img/icons/arrow_right.svg' alt='next'></button>",
  responsive: [
    {
      breakpoint: 1401,
      settings: {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,
      }
    },
    {
      breakpoint: 1199,
      settings: {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,
      }
    },
        {
      breakpoint: 812,
      settings: {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,
      }
    },
          {
      breakpoint: 551,
      settings: {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,
      }
    },
      {
      breakpoint: 375,
      settings: {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      pauseONFocus:true,
      pauseONHover:true,
      pauseOnDotsHover:true,
      swipe:true,
      swipeToSlide:true,
      easing:true,
      }
    },
     ]

    });
});

