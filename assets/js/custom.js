//  COMMENT 

//Close collapse menu on mobiles ater clicking
jQuery('.nav-collapse .nav > li > a').click(function(){
			
			jQuery('.collapse.in').removeClass('in').css('height', '0');

		});


//  PrettyPhoto Plugin
jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
//  COMMENT 

//  Isotope plugin 
		jQuery.noConflict()(function($){
			var $container = $('#container-folio');
					
			if($container.length) {
				$container.waitForImages(function() {
					
					// initialize isotope
					$container.isotope({
					  itemSelector : '.box',
					  layoutMode : 'fitRows'
					});
					
					// filter items when filter link is clicked
					$('#filters a').click(function(){
					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
					  
					  return false;
					});
					
				},null,true);
			}});

//  Scroll & Parallax Plugins
jQuery(document).ready(function(){
	jQuery('#nav').localScroll(3000);
	jQuery('#main-nav select').localScroll(400);
	jQuery('#startbtn').localScroll(1000);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('#features-section').parallax("50%", 0.1);
	jQuery('#team-section').parallax("50%", 0.1);
	jQuery('.bg').parallax("50%", 0.4);
	jQuery('#portfolio-section').parallax("50%", 0.1);
	jQuery('#price-section').parallax("50%", 0.3);
	jQuery('#contact-section ').parallax("50%", 0.1);
})




//  Gmap Plugin	
				jQuery(document).ready(function(){

				jQuery('#map').gMap({ address: 'Folsom Ave, San Francisco, CA',
							   panControl: true,
						   zoomControl: true,
							   zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
							   },
						   mapTypeControl: true,
						   scaleControl: true,
						   streetViewControl: false,
						   overviewMapControl: true,
							   scrollwheel: false,
							   icon: {
						image: "http://www.google.com/mapfiles/marker.png",
						shadow: "http://www.google.com/mapfiles/shadow50.png",
						iconsize: [20, 34],
						shadowsize: [37, 34],
						iconanchor: [9, 34],
						shadowanchor: [19, 34]
					},
						zoom:15,
							   markers: [
							{ 'address' : 'Folsom Ave, San Francisco, CA'}
						]
							   
							   
							   }); 
				});

	
	//  COMMENT 
jQuery('#show1').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInRightBig");

			
        }else{
            jQuery(this).removeClass("animated fadeInRightBig");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 	

//  COMMENT 
jQuery('#show2').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInLeftBig");

			
        }else{
            jQuery(this).removeClass("animated fadeInLeftBig");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 

//  COMMENT 
jQuery('#show3').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#show3 .tile').addClass("animated bounceIn");

			
        }else{
            jQuery('#show3 .tile').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 

//  COMMENT 
jQuery('#show4').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#show4 .thumbnail').addClass("animated bounceIn");

			
        }else{
            jQuery('#show4 .thumbnail').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 



//  COMMENT 
jQuery('#showprice').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.price-tile').addClass("animated bounceIn");

			
        }else{
            jQuery('.price-tile').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 





//  COMMENT 
jQuery('#showbar').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.bar').removeClass("notactive");

			
        }else{
             jQuery('.bar').addClass("notactive");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 
