function tweet() {
	//position stuff for centering
	var D=550;
	var A=450;
	var C=screen.height;
	var B=screen.width;
	var H=Math.round((B/2)-(D/2));
	var G=0;
	if(C>A){
		G=Math.round((C/2)-(A/2))
	};
	
	var text = "Hello JavaScript";
	var url =  "http%3A%2F%2Fkruegerrobb.net%2Ffb%2Funtitled.html";
	var urlTW = "https://twitter.com/intent/tweet?text="+text+"&url="+url;
   	var winTW = window.open(urlTW,'','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
}