<?php
include "config.php"; 

	$data = json_decode(file_get_contents("php://input"));
	$nombreCarrera = mysql_real_escape_string($data->nombre);
	$cod = mysql_real_escape_string($data->codigo);
	$dir = mysql_real_escape_string($data->director);
	$idCarrera = mysql_real_escape_string($data->id);
	$inactivo=($data->inactivo);

	if($dir != '' && $nombreCarrera != '' && $cod != ''){
		$sql = "CALL modificarCarrera('$nombreCarrera', '$dir', '$cod', '$idCarrera', '$inactivo')";
	}
   	
	$result = mysqli_query($con, $sql);   
    mysqli_close($con);
    echo json_encode($result);
   
?>