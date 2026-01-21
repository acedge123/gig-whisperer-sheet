jQuery(function ($) {

    //PRELOADER
    $(window).on("load",function(){
        $(".preloader-content").animate({left: '-100%'}, 600);
        setTimeout((function() {
            $(".preloader").animate({left: '-100%'}, 450);;
        }), 300);
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScTop = 0;
    var delta = 5;
    var navbarHeight = $('.main-header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScTop - st) <= delta)
            return;

        if (st > lastScTop && st > navbarHeight){
            // Scroll Down
            $('.main-header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.main-header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScTop = st;
    }

    /*MOBILE MENU*/
    $('.open-menu').click(function(e){
        e.preventDefault();
        $('.main-navigation ul').animate({right: '0'}, 200);
        
        $(document).mouseup( function (e) { 
            var content = $('.main-navigation ul');
            if (e.target != content[0] && content.has(e.target).length === 0){
                $('.main-navigation ul').animate({right: '-200px'}, 200);
            }
        });
    });

    /*BANNER IMAGE MOVE*/
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 768) {
            $(".banner-img img").css("top", "-221" - (scroll / 2) + "px");
        } else if (windowsize > 550){
            $(".banner-img img").css("top", "-120" - (scroll / 2) + "px");
        } else {
            $(".banner-img img").css("top", "-55" - (scroll / 2) + "px");
        }
       
    });

    //TESTIMONIALS
    $(window).on('load resize orientationchange reload onbeforeunload', function() {
        $('.testimonials-slider').each(function(){
          var $carousel = $(this);
          if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
              $carousel.slick('unslick');
            }
            $carousel.slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
            });
          } else {
            if ($carousel.hasClass('slick-initialized')) {
              $carousel.slick('unslick');
            }
            $carousel.slick({
                infinite: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
            });
          }
        });
    }); 

    //BLOG BANNER BG MOVE
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 768) {
            $(".topbg").css("top", "-40" - (scroll / 3) + "px");
        } else { 
            $(".topbg").css("top", "-20" - (scroll / 3) + "px");
        }
       
    });
    
    //DEFAULT TEMPLATE MOVE DIAGONAL STRIPE
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".diagonal-stripe-single").css("top", "-100" - (scroll / 3) + "px");
    });

    //DYNAMIC HEIGHT FOR TEAM IMAGES
    $(window).on('load resize orientationchange reload onbeforeunload', function() {
        var team_img = $('.team-member').width();
     $('.team-member').css({'height':team_img+'px'});
    });
})