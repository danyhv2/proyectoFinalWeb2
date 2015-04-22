<?php
include "config.php"; 

	$data = json_decode(file_get_contents("php://input"));
	$nombre = mysql_real_escape_string($data->nombre);
	$primerApellido = mysql_real_escape_string($data->primerApellido);
	$segundoApellido = mysql_real_escape_string($data->segundoApellido);
	$dir = mysql_real_escape_string($data->direccion);
	$telefono = mysql_real_escape_string($data->tel);
	$ced = mysql_real_escape_string($data->ced);
	$email = mysql_real_escape_string($data->correo);
	$contrasena = mysql_real_escape_string($data->pass);
	$fecha = mysql_real_escape_string($data->fechaNacimiento);
	$role = mysql_real_escape_string($data->role);
	$id=mysql_real_escape_string($data->id);
	$inactivo='0';




	//if($nombre != '' && $primerApellido != '' && $segundoApellido != '' && $role != '' && $email != ''){
		$sql = "CALL modificarUsuario('$nombre', '$email', '$ced', '$primerApellido', '$segundoApellido', '$dir', '$telefono', '$contrasena', '$fecha', '$role', '$inactivo', '$id')";
	//}
   	


	$result = mysqli_query($con, $sql);   
   

    if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }
   
    mysqli_close($con);
    echo json_encode($result);
?>