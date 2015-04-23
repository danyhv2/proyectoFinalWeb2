<?php

include "config.php";

    $data = json_decode(file_get_contents("php://input"));
	$fechaInicio = mysql_real_escape_string($data->fInicio);
	$fechaCierre = mysql_real_escape_string($data->fCierre);
	
	$fIni = date("Y-m-d", strtotime($fechaInicio));
	$fCierre = date("Y-m-d", strtotime($fechaCierre));

	$query = 'INSERT INTO periodo_votacion (id_periodo, fecha_inicio, fecha_cierre) values ("", "' . $fIni . '","' . $fCierre . '")';

	//$query= "CALL ingresarCarrera('$nameCarrera','$dirCarrera','','$codigo')";

	$result = mysqli_query($con, $query);

	    if (!$result){
	        echo "DB error";
	        echo "MySQL error:" . mysqli_error($con);
	        exit;
	    }else{
	    	echo 'exito';
	    }

?>