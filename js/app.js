$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

var typed = new Typed(".typing", {
   strings: ["WEBSITE DEVELOPMENT", "GRAPHIC DESIGNING", "DIGITAL MARKETING", "PRODUCT DEVELOPMENT"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});

function toggle(id) {
   a = document.getElementById('toggle_'+id);
   b = document.getElementById('display_'+id);
     if (a.style.display=='block') {
       a.style.display='none';
       b.innerHTML='Read More';
     }
     else {
       a.style.display='block';
       b.innerHTML='Hide Discussion';
   }
 }