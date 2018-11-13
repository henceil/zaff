<?php
	$host = '127.0.0.1';
	$user = 'root';
	$pwd = 'root';
	$dbName = 'mydb';
	
	$db = new mysqli($host,$user,$pwd,$dbName);
	if($db->connect_errno <> 0)
	{
		die("数据库连接失败");	
	}
	$sql = "SELECT * FROM BlackList";
	$result = $db->query($sql);
	$resultInfo = $result->fetch_all( MYSQLI_ASSOC );
	
	$json = json_encode($resultInfo);
	echo $json;
?>