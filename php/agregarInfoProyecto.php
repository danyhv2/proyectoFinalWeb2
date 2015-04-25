<?php
 include "config.php"; 


  $formatos = array('.jpg','.png');
  $directorio = "uploads/proyectos";
  
  if(isset($_POST['guardarFotoT']))
    {
        $titulo=$_POST['grupos'];
        $descripcion = $_POST['archivo'];
        $archivo = $_FILES['archivoF']['name'];
        $archivoTmpArchivo = $_FILES['archivoF']['tmp_name'];
        $ext = substr($archivo, strrpos($archivo, '.'));
      $sql = "CALL descripcionProyecto('$titulo','$descripcion')"; 

        $result = mysqli_query($con, $sql) or die(mysqli_error());

        if(in_array($ext,$formatos)){
            if(move_uploaded_file($archivoTmpArchivo, "../uploads/proyectos/$archivo")){
                echo"archivo movido";
            }else{
                echo"ocurrio un error";
            }
        }
    }
?>