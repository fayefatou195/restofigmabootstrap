

(function(){

'use strict';

AOS.init({
   duration: 700,
   easing: 'ease',
   once: true,
});


 new CircleType(document.getElementById('circle-type'));

 var circleText = document.getElementById('circle-type');
 window.addEventListener('scroll', function(){
    circleText.style.transform = "rotate("+window.pageYOffset+"deg)";
 });

 $('.owl-carousel').owlCarousel({
   rtl:true,
   loop:true,
   margin:10,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})

}) ();