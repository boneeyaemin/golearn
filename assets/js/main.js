$(document).ready(function(){
    
        $('.h-menu ul').clone().appendTo('.mobile-menu');
        $('.menu-trigger').on("click", function(){
            $('.mobile-menu').slideToggle();
            console.log( "it works!" );
            
        });





});