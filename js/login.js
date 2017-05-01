var jUserData = null;

// Disable ajax async, gives way too more issues..
$.ajaxSetup({
    async: false
});

function fnCheckSession(){
	var checker = false;
	var sUrl = "php/api-check-login.php";
	$.getJSON(sUrl).done(function(jData){
		if(jData.status=="ok"){
			checker = true;
		}
	});
	return checker;
}

function fnGetSessionData(){
	var sUrl = "php/api-check-login.php";
	$.getJSON(sUrl).done(function(jData){
		console.log(jData);
		console.log(jUserData);
		jUserData = jData;
		console.log(jUserData);
	});
}

function fnLogout(){
	$.get("php/api-logout.php");
	jUserData = null;
}

