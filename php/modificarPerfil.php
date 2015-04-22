<?php
include "config.php"; 

	$data = json_decode(file_get_contents("php://input"));
	$descripcion = mysql_real_escape_string($data->descripcion);
	$telefono = mysql_real_escape_string($data->tel);
	$dir = mysql_real_escape_string($data->direccion);
	
	if($telefono != '' && $dir != ''){
		$sql = "CALL modificarInfoUsuario('$telefono', '$dir', 'test@gmail.com')";
	}	
	if($descripcion != ''){
		$sql2= "CALL modificarDescripcionPortafolio('$descripcion', 'test@gmail.com')";
	}
		
   	
	$result = mysqli_query($con, $sql);  
	$result2 = mysqli_query($con, $sql2); 
    mysqli_close($con);
    echo json_encode($result);
    echo json_encode($result2);
?>