var j = jQuery.noConflict();
j(document).ready(function() {
	
	intervalID = setInterval(
		function(){ 
			lPosition = j('.icon-msg').offset();
			if (lPosition) {
			  j('.alert-icon').css({ 'left': lPosition.left + 20 })
			}
			clearInterval(intervalID);
		}, 
	100);

	
});
