function fnCheckSession(){
	var sUrl = "api-check-login.php";
	$.getJSON(sUrl).done(function(jData){
		if(jData.status=="ok"){
			return true;
		}else{
			return false;
		}
	});
}

function fnGetSessionData(){
	// var sUrl = "api-check-login.php";
	$.getJSON(sUrl).done(function(jData){
		//TO DO
	});
}

