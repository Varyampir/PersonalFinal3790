
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#content").fitVids();
  });

  $(window).load(function() {
    $('#main-slider').flexslider({
    	animation: 		"slide",
    	slideshowSpeed:	4000, 
    	animationSpeed: 300
    });

    $('#secondary-slider').flexslider({
    	animation: 		"slide",
    	slideshowSpeed:	4000, 
    	animationSpeed: 300,
    	controlNav: "thumbnails"
    });
  });