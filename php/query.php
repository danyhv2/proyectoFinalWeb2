<?php
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!
define('DB_NAME', 'proyectoFinalWeb');
    define('DB_USER', 'root');
    define('DB_PASSWORD', NULL);
    define('DB_HOST', 'localhost'); 

    $con = mysqli_connect(DB_HOST, DB_USER,DB_PASSWORD, DB_NAME);
	
	if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL". mysqli_connect_error();
    }  


    $data = json_decode(file_get_contents("php://input"));
	$usrname = mysql_real_escape_string($data->nombre);
	$firstLastName = mysql_real_escape_string($data->PrimerApellido);
	$SecondLastName = mysql_real_escape_string($data->SegundoApellido);
	$address = mysql_real_escape_string($data->Direccion);
	$userId = mysql_real_escape_string($data->Cedula);
	$userImg = mysql_real_escape_string($data->Foto);
	$fchNacimiento = mysql_real_escape_string($data->FechaNacimiento);
	$email = ($data->Correo);
	$password = ($data->Contrasena);
	$role=1;

	echo $usrname, $firstLastName, $SecondLastName, $address, $userId, $fchNacimiento, $email;

	/*CONFIGURAR IMAGEN*/
	$nombreimg = $_FILES['archivo']['name'];

$ext_permitidas = array('jpg','jpeg','gif','png');
$extension = end( explode('.', $_FILES['archivo']['name']) );
$ext_correcta = in_array($extension, $ext_permitidas);

$tipo_correcto = preg_match('/^image\/(pjpeg|jpeg|gif|png)$/', $_FILES['archivo']['name']);

$nombre_tmp = $_FILES['archivo']['tmp_name'];
$tipo = $_FILES['archivo']['type'];
$tamano = $_FILES['archivo']['size'];
$limite = 4000000;
$degrees = 0;

$ext_permitidas = array('jpg','jpeg','gif','png');
$partes_nombre = explode('.', $nombreimg);
$extension = end( $partes_nombre );
$ext_correcta = in_array($extension, $ext_permitidas);
$tipo_correcto = preg_match('/^image\/(pjpeg|jpeg|gif|png)$/', $tipo);

if($tamano <= $limite){
	if( $ext_correcta && $tipo_correcto){
	$ruta_imagen = $_FILES['archivo']['tmp_name'];

      	$miniatura_ancho_maximo = 179;
		$miniatura_alto_maximo = 239;
		$info_imagen = getimagesize($ruta_imagen);
		$imagen_ancho = $info_imagen[0];
		$imagen_alto = $info_imagen[1];
		$imagen_tipo = $info_imagen['mime'];

		$lienzo = imagecreatetruecolor( $miniatura_ancho_maximo, $miniatura_alto_maximo );

		switch ( $imagen_tipo ){
		  case "image/jpg":
		  case "image/jpeg":
		    $imagen = imagecreatefromjpeg( $ruta_imagen );
		    break;
		  case "image/png":
		    $imagen = imagecreatefrompng( $ruta_imagen );
		    break;
		  case "image/gif":
		    $imagen = imagecreatefromgif( $ruta_imagen );
		    break;
		}

		$exif = exif_read_data($ruta_imagen);
                if(!empty($exif['Orientation'])) {
                switch($exif['Orientation']) {
                case 8:
                    $imagen = imagerotate($imagen,90,0);
                    break;
                case 3:
                    $imagen = imagerotate($imagen,180,0);
                    break;
                case 6:
                    $imagen = imagerotate($imagen,-90,0);
                    break;
                } 
                }

		$proporcion_imagen = $imagen_ancho / $imagen_alto;
		$proporcion_miniatura = $miniatura_ancho_maximo / $miniatura_alto_maximo;


		if ( $proporcion_imagen > $proporcion_miniatura ){
		  $miniatura_ancho = floor($miniatura_alto_maximo * $proporcion_imagen);
		  $miniatura_alto = $miniatura_alto_maximo;

		$x = floor( $miniatura_ancho - $miniatura_ancho_maximo ) / 2;
		$y = floor( $miniatura_alto - $miniatura_alto_maximo ) / 2;

		$lienzo = imagecreatetruecolor( $miniatura_ancho_maximo, $miniatura_alto_maximo );

		imagecopyresampled($lienzo, $imagen, 0, 0, $x, $y, $miniatura_ancho, $miniatura_alto, $imagen_ancho, $imagen_alto);

		imagecopy($lienzo);

		} else if ( $proporcion_imagen < $proporcion_miniatura ){
		  $miniatura_ancho = $miniatura_ancho_maximo;
		  $miniatura_alto = floor($miniatura_ancho_maximo / $proporcion_imagen);

		  $x = floor( $miniatura_ancho - $miniatura_ancho_maximo ) / 2;
		$y = floor( $miniatura_alto - $miniatura_alto_maximo ) / 2;


		$lienzo = imagecreatetruecolor( $miniatura_ancho_maximo, $miniatura_alto_maximo );

		$lienzo_temporal = imagecreatetruecolor( $miniatura_ancho, $miniatura_alto );

		imagecopyresampled($lienzo_temporal, $imagen, 0, 0, 0, 0, $miniatura_ancho, $miniatura_alto, $imagen_ancho, $imagen_alto);
		imagecopy($lienzo, $lienzo_temporal, 0,0, $x, $y, $miniatura_ancho_maximo, $miniatura_alto_maximo);

		} else {
		  $miniatura_ancho = $miniatura_ancho_maximo;
		  $miniatura_alto = $miniatura_alto_maximo;

		  $x = floor( $miniatura_ancho - $miniatura_ancho_maximo ) / 2;
		$y = floor( $miniatura_alto - $miniatura_alto_maximo ) / 2;


		$lienzo = imagecreatetruecolor( $miniatura_ancho_maximo, $miniatura_alto_maximo );

		$lienzo_temporal = imagecreatetruecolor( $miniatura_ancho, $miniatura_alto );

		imagecopyresampled($lienzo_temporal, $imagen, 0, 0, 0, 0, $miniatura_ancho, $miniatura_alto, $imagen_ancho, $imagen_alto);
		imagecopy($lienzo, $lienzo_temporal, 0,0, $x, $y, $miniatura_ancho_maximo, $miniatura_alto_maximo);

		}

		imagedestroy($imagen);

		imagejpeg( $lienzo, "../uploads/".$userImg.".jpg");
      }
   
}


	$query = 'INSERT INTO usuarios (nombre, primerApellido, segundoApellido, direccion, cedula, foto, fechaNacimiento, correo, contrasena, id_role) values ("' . $usrname . '","' . $firstLastName . '","' . $SecondLastName . '","'.$address.'","'.$userId.'","'.$userImg.'","'.$fchNacimiento.'","'.$email.'","'.$password.'","'.$role.'")';


	//$query= "CALL ingresarUsuario(".$email.",".$userId.",".$usrname.",".$firstLastName.",".$SecondLastName.",".$password.",".$address.",".$fchNacimiento.",".$role.",".$userImg.")";

	//$query= "CALL ingresarUsuario(".$objData->nombre.",".$objData->primerApellido.",".$objData->segundoApellido.",".$objData->direccion.",".$objData->cedula.",".$objData->foto.",".$objData->fechaNacimiento.",".$objData->correo.",".$objData->contrasena.",".$objData->id-role.")";

	$result = mysqli_query($con, $query);

	    if (!$result){
	        echo "DB error";
	        echo "MySQL error:" . mysqli_error($con);
	        exit;
	    }else{
	    	echo 'exito';
	    }

?>