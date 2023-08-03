$(document).ready(function(){
    
        $('.h-menu ul').clone().appendTo('.mobile-menu');
        $('.menu-trigger').on("click", function(){
            $('.mobile-menu').slideToggle();
            console.log( "it works!" );
            
        });


        $('.video-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });


});