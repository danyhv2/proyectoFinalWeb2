<?php

include "config.php";

    $data = json_decode(file_get_contents("php://input"));
	$nameCarrera = utf8_encode($data->nombre);
	$codigo = mysql_real_escape_string($data->codigo);
	$dirCarrera = mysql_real_escape_string($data->directorCarrera);

	$query= "CALL ingresarCarrera('$nameCarrera','$dirCarrera','','$codigo')";

	$result = mysqli_query($con, $query);

	    if (!$result){
	        echo "DB error";
	        echo "MySQL error:" . mysqli_error($con);
	        exit;
	    }else{
	    	echo 'exito';
	    }

?>