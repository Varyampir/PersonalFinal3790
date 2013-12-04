$(document).ready(function() {
	$(function(){
		$('#showPhoneNav').click(function() {
		    $("#myNav").slideToggle('normal', function(){ //Shows Nav area
				if ($('#myNav').is(':visible')) {
					$('#showPhoneNav').text('Hide Menu');
					} else {
					$('#showPhoneNav').text('Menu');
				} //end of if
			}); //end of slidetoggle
		}); //end of myNav
	}); //end showPhoneNav



}); //end of ready