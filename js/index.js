$(document).ready(function(){
	var agent = navigator.userAgent.toLowerCase();
	// alert(agent);
	if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
		$("#main-pic").hide();
	}
});