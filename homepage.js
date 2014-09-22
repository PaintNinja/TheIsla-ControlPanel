var iFrameID = "contentframe"
var newPageDash = "http://minetrends.com/dashboard";
var newPageStatus = "http://minetrends.com/statistics/serverhealth";
var newPagePlayers = "http://minetrends.com/statistics/players";
function ChangePageDash() {
var iFrameObject = document.getElementById(iFrameID);
iFrameObject.src = newPageDash;
}
function ChangePageStatus() {
var iFrameObject = document.getElementById(iFrameID);
iFrameObject.src = newPageStatus;
}
function ChangePagePlayers() {
var iFrameObject = document.getElementById(iFrameID);
iFrameObject.src = newPageStatus;
}
<!--
function resize_iframe()
{

	var height=window.innerWidth;//Firefox
	if (document.body.clientHeight)
	{
		height=document.body.clientHeight;//IE
	}
	//resize the iframe according to the size of the
	//window (all these should be on the same line)
	document.getElementById("contentframe").style.height=parseInt(height-
	document.getElementById("contentframe").offsetTop-8)+"px";
}

// this will resize the iframe every
// time you change the size of the window.
window.onresize=resize_iframe; 

//Instead of using this you can use: 
//	<BODY onresize="resize_iframe()">


//-->