<?php

include "config.php";

    $data = json_decode(file_get_contents("php://input"));
	$usrname = mysql_real_escape_string($data->nombre);
	$firstLastName = mysql_real_escape_string($data->PrimerApellido);
	$SecondLastName = mysql_real_escape_string($data->SegundoApellido);
	$address = mysql_real_escape_string($data->Direccion);
	$userId = mysql_real_escape_string($data->Cedula);
	$userImg = mysql_real_escape_string($data->Foto);
	$fchNacimiento = mysql_real_escape_string($data->FechaNacimiento);
	$userPic = mysql_real_escape_string($data->img);
	$email = ($data->Correo);
	$password = ($data->Contrasena);
	$role=mysql_real_escape_string($data->role);

	echo $usrname, $firstLastName, $SecondLastName, $address, $userId, $fchNacimiento, $email;

$fNac = date("Y-m-d", strtotime($fchNacimiento));


	//$query = 'INSERT INTO usuarios (nombre, primerApellido, segundoApellido, direccion, cedula, foto, fechaNacimiento, correo, contrasena, id_role) values ("' . $usrname . '","' . $firstLastName . '","' . $SecondLastName . '","'.$address.'","'.$userId.'","'.$userImg.'","'.$fNac.'","'.$email.'","'.$password.'","'.$role.'")';

	$query= "CALL ingresarUsuario('$email','$userId','$usrname','$firstLastName','$SecondLastName','$password','$address','$fNac','$role','$userImg','')";

	$result = mysqli_query($con, $query);

	    if (!$result){
	        echo "DB error";
	        echo "MySQL error:" . mysqli_error($con);
	        exit;
	    }else{
	    	echo 'exito';
	    }

?>