// JavaScript Document
console.log("Facebook JS ");
FB.init({
	appId      : '802560509771616', // App ID
	status     : true, // check login status
	cookie     : true, // enable cookies to allow the server to access the session
	xfbml      : true  // parse XFBML
});


FB.getLoginStatus(function(response) {
	console.log("Response "+ response);
	console.log("getloginstatus");
	if (response.status === 'connected') {
		// connected
		testAPI();
	} else if (response.status === 'not_authorized') {
		// not_authorized
		login();
	} else {
		// not_logged_in
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
	console.log('login');
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
