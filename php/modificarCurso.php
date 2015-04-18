<?php
include "config.php"; 

	$data = json_decode(file_get_contents("php://input"));
	$nameCurso = mysql_real_escape_string($data->nombre);
	$cuatrimestre = mysql_real_escape_string($data->cuatrimestre);
	$anno = mysql_real_escape_string($data->anoLectivo);
	$horario = mysql_real_escape_string($data->horario);
	$credito = mysql_real_escape_string($data->creditos);
	$cod = mysql_real_escape_string($data->codigo);
	$inactivo = ($data->inactivo);
	$idCurso = mysql_real_escape_string($data->id);

   //$sql= "UPDATE carreras SET nombre = '$nombreCarrera', dirCarrera = '$dir', inactivo= '', codCarrera ='$cod' WHERE id_carrera = '$idCarrera'";
	if($horario != '' && $nameCurso != '' && $cod != ''){
		$sql = "CALL modificarCurso('$nameCurso', '$cuatrimestre', '$anno', '$horario', '$credito', '$cod', '$inactivo', '$idCurso')";
	}
   	
	$result = mysqli_query($con, $sql);   
	if (!$result){
	        echo "DB error";
	        echo "MySQL error:" . mysqli_error($con);
	        exit;
	    }else{
	    	mysqli_close($con);
    		echo json_encode($result);
	    }

    
   
?>
