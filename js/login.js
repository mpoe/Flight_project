var jUserData = null;

function fnCheckSession(){
	var sUrl = "php/api-check-login.php";
	$.getJSON(sUrl).done(function(jData){
		if(jData.status=="ok"){
			console.log("TRUE")
			return true;
		}else{
			console.log("FALSE")
			return false;
		}
	});
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

