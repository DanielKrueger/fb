// JavaScript Document

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/all.js', function(){
   	FB.init({
      	appId: '802560509771616'
    });   
	console.log("Lodaed SDK");  
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });
});

/*FB.getLoginStatus(function(response) {
	console.log("Response");
	console.log("getloginstatus");
	if (response.status === 'connected') {
		// connected
		console.log('connected')
	} else if (response.status === 'not_authorized') {
		// not_authorized
		console.log('not_authorized')
		login();
	} else {
		// not_logged_in
		console.log('not_logged_in')
		login();
	}
});


function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log("Good to see you, " + response.name + ".");
    });
}

function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
        } else {
            // cancelled
        }
    });
}

FB.ui({
    method: 'feed',
    link: 'https://developers.facebook.com/docs/reference/dialogs/',
    picture: 'http://fbrell.com/f8.jpg',
    name: 'Facebook Dialogs',
    caption: 'Reference Documentation',
    description: 'Using Dialogs to interact with people.'
}, function(response){
	
	 if (response && response.post_id) {
       alert('Post was published.');
     } else {
       alert('Post was not published.');
     }
	});

*/