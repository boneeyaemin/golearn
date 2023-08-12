$(document).ready(function(){
    
        // play button
        $('.video-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });


                    //  owl-carousel owl-carousel
        $(".slider1").owlCarousel({
            items:3,
            nav:true,
            dots:true,
            autoplay: true,
            margin:15,
            loop: true,
            smartSpeed: 600,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                767:{
                    items:2,
                    nav:false
                },
                991:{
                    items:3,
                    nav:false
                },
            },
            nav:true,
            navText: [
                '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',
                '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
            ],
        });

// manu manu
        $(".h-menu").clone().prependTo(".mobile-menu");
        $(".menutrigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").stop(true,false,true).slideToggle();
        $('body').toggleClass('overflow-hidden');
        });

        // 

        // slider2
        $(".slider2").owlCarousel({
            dots:true,
            autoplay: true,
            loop: true,
            smartSpeed: 600,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                767:{
                    items:3,
                    nav:false
                },
                991:{
                    items:5,
                    nav:false
                },
            },
        });
        // slider3
        var testimonial = $(".slider3").owlCarousel({
            dots:false,
            autoplay: true,
            loop: true,
            smartSpeed: 600,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:1,
                },
                991:{
                    items:1,
                },
            },
        });
                // Go to the next item  / next button easyly top a newa jay
        $('.tmNextBtn').click(function() {
            testimonial.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.tmPrevBtn').click(function() {
            testimonial.trigger('prev.owl.carousel', [300]);
        })

       
// button a click korla card on hoba
    $('.filter-button li').on("click",function(){
        var button = $(this).data('filter');
        $(this).addClass('active').siblings().removeClass('active');
        if(button == 'all') {
            $('.filter-item').show();
          }
          else {
            $('.filter-item:not(.' + button + ')').hide();
      
           $('.filter-item.' + button ).show();
       }
    });
            


});