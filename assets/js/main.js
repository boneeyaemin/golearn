$(document).ready(function(){
    
        // $('.h-menu ul').clone().appendTo('.mobile-menu');
        // $('.menu-trigger').on("click", function(){
        //     $('.mobile-menu').slideToggle();
        //     console.log( "it works!" );
            
        // });

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
            autoplay: false,
            margin:15,
            loop: true,
            smartSpeed: 600,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
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
            ]
        });


        $(".h-menu").clone().prependTo(".mobile-menu");
        $(".menutrigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").stop(true,false,true).slideToggle();
        $('body').toggleClass('overflow-hidden');
        });

        // 
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
                    items:2,
                    nav:false
                },
                991:{
                    items:5,
                    nav:false
                },
            },
        });

        // nothing

            $('#filterOptions li a').click(function() {
              // fetch the class of the clicked item
              var ourClass = $(this).attr('class');
          
              // reset the active class on all the buttons
              $('#filterOptions li').removeClass('active');
              // update the active state on our clicked button
              $(this).parent().addClass('active');
          
              if(ourClass == 'all') {
                // show all our items
                $('#ourHolder').children('div.item').show();
              }
              else {
                // hide all elements that don't share ourClass
                $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
                // show all elements that do share ourClass
                $('#ourHolder').children('div.' + ourClass).show();
              }
              return false;
            });
            


});