<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $Nombre = mysql_real_escape_string($data->nombreProf);
  $Rol = mysql_real_escape_string($data->RolProf);
  $Grupo = mysql_real_escape_string($data->GrupoAsig);

  $query= "CALL agregarProfesorGrupo('$Nombre','$Rol', '$Grupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>