<?php

include "config.php";

    $data = json_decode(file_get_contents("php://input"));
	$nameCurso = mysql_real_escape_string($data->nombre);
	$cuatrimestre = mysql_real_escape_string($data->cuatrimestre);
	$anno = mysql_real_escape_string($data->anoLectivo);
	$horario = mysql_real_escape_string($data->horario);
	$credito = mysql_real_escape_string($data->creditos);
	$cod = mysql_real_escape_string($data->codigo);

	$query= "CALL ingresarCurso('$nameCurso','$cuatrimestre','$anno','$horario', '$credito', '$cod')";

	$result = mysqli_query($con, $query);
	

?>
