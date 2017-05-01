<?php
	session_start();



	$sUsername = $_GET['username'];
	$sPassword = $_GET['password'];

	$sFileName = "data-users.txt";

	$sajUsers = file_get_contents( $sFileName );
	$ajUsers = json_decode( $sajUsers );

	//Check login
	for($i =0; $i<count($ajUsers);$i++){
		if($sUsername==$ajUsers[$i]->sUsername && $sPassword == $ajUsers[$i]->sPassword){
		$sjInfo = '{"username":"'.$ajUsers[$i]->sUsername.'","userID":"'.$ajUsers[$i]->sID.'"}';
		
		$_SESSION['jUserInfo'] = $sjInfo;
		
		//var_dump($_SESSION['jUserInfo']);

		echo '{"status":"ok"}';
		/*
		$newajInfo = json_decode($_SESSION['jUserInfo']);
        var_dump($newajInfo);
        */
        exit;
		}
	}
	echo '{"status":"no"}';
?>