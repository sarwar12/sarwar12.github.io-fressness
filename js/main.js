$(document).ready(function(){
	/*Owl carousel*/
  $(".sliders").owlCarousel({
	  items:1,
	  autoplay:true,
	  loop:true,
	  smartSpeed:500,
  });
  
	/*Tooltip*/
   $('.tooltip').tooltipster({
	   animation:'swing',
	   delay:200,
	   theme:'tooltipster-shadow',
   });
   
	/*wow animation*/
   new WOW().init();
   
});
