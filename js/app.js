//initialize scroll-to
     smoothScroll.init({
        speed: 1000,
            easing: 'easeInOutCubic',
            offset: 0,
            updateURL: true,
            callbackBefore: function ( toggle, anchor ) {},
            callbackAfter: function ( toggle, anchor ) {}
     });

$(document).foundation();

$(document).ready(function(){
    // initialize slick.js
    $('.testimonial-slider').slick({
      dots: true,
      autoplay: true
    });



    
})

$(document).ready(function() {
    
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    
});

$(window).on("load resize",function(){
        $('.main-banner-container').css({
        "height" : $(window).height(),
        "width"  : $(window).width()
        });

        $('.main-banner').css({
       //     "margin-top" : $(window).height()/4
        })
    })

$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });
});

