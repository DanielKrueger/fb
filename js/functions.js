$( document ).ready(function() {
	console.log("ready");
	$( "#fbShare" ).click(function() {
		fbShare();
		trackClick('share','facebook','Fiji Property');
	});
	
	$( "#twitter" ).click(function() {
		tweet();
		trackClick('share','twitter','Fiji Property');
	});
	
	
});	

