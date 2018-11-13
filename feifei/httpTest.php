<?php
$ch = curl_init();
$timeout = 5;
curl_setopt ($ch, CURLOPT_URL, 'http://sonar.zhonganonline.com/api/qualitygates/project_status?projectKey=PHP:CarInsurance');
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$file_contents = curl_exec($ch);
curl_close($ch);

$jsonData = json_decode($file_contents);
var_dump($jsonData);
// echo "</br>";
// foreach ($jsonData as $key => $value) {
// 	echo "key: ";
// 	echo ($key);
// 	echo ",value: ";
// 	var_dump($value);
// 	echo "<br>";
// }
?>
