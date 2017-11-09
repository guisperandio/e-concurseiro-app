$(document).ready(function() {
	intervalID = setInterval(
		function(){ 
			lPosition = $('.icon-msg').offset();
			if (lPosition) {
			  $('.alert-icon').css({ 'left': lPosition.left + 20 })
			}
		}, 
	100);
});