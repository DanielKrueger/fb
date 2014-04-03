$( document ).ready(function() {
	$( "#share" ).click(function( event ) {
		fbShare();
		event.preventDefault();
	});
});	

function fbShare(){
	console.log("in");
}
