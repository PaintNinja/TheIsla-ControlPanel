var iFrameID = "contentframe"
var newPage = "http://www.msn.com";
function ChangePage() {
var iFrameObject = document.getElementById(iFrameID);
iFrameObject.src = newPage;
