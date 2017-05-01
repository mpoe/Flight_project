<?php
session_start();

if( empty($_SESSION['jUserInfo']) ) {
     echo '{"status":"no"}';
}
else {
	$newajInfo = json_decode($_SESSION['jUserInfo']);
	//var_dump($newajInfo);
     echo '{"status":"ok","username":"'.$newajInfo->username.'","userID":"'.$newajInfo->userID.'"}';
}

?>