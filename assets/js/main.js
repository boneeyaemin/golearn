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
        var slider1 = $(".slider1").owlCarousel({
            items:3,
            nav:true,
            dots:true,
            autoplay: false,
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
            
        });
        
        // other
        $('.tmPrevBtn').click(function() {
            slider1.trigger('next.owl.carousel');
        })  
        $('.tmNextBtn').click(function() {
            slider1.trigger('prev.owl.carousel', [300]);
        }) 

// manu manu
        $(".h-menu").clone().prependTo(".mobile-menu");
        $(".menutrigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").stop(true,false,true).slideToggle();
        $('body').toggleClass('overflow-hidden');
        });

        // drop-down-manu er icon
        // $(".h-menu li ul").parents("li").addClass("has-children").append('<i class="fa-solid fa-angle-down down-arrow"></i>');

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
            items:1,
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
     
    
    // count er js
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });



});