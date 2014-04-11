// JavaScript Document
console.log("Facebook JS ");
FB.init({
	appId      : '802560509771616', // App ID
	status     : true, // check login status
	cookie     : true, // enable cookies to allow the server to access the session
	xfbml      : true  // parse XFBML
});

/*
FB.getLoginStatus(function(response) {
	console.log("Response "+ response);
	console.log("getloginstatus");
	if (response.status === 'connected') {
		// connected
		//testAPI();
	} else if (response.status === 'not_authorized') {
		// not_authorized
		//login();
	} else {
		// not_logged_in
		//login();
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

*/
function fbShare(){
	FB.ui({
		method: 'feed',
		link: 'http://kruegerrobb.net/fb/untitled.html#7',
		picture: 'http://fbrell.com/f8.jpg',
		name: 'Facebook Sample Feed',
		caption: 'My Favorite Property',
		description: 'Share this data with someone.'
	}, function(response){
		
		 if (response && response.post_id) {
		   console.log('Post was published.');
		 } else {
		   console.log('Post was not published.');
		 }
	});
}