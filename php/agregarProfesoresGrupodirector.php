<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $Rol = mysql_real_escape_string($data->RolProf);
  $Nombre = mysql_real_escape_string($data->nombreProf);
  $Grupo = mysql_real_escape_string($data->GrupoAsig);

  $query= "CALL agregarProfesorGrupo('$Rol', '$Nombre', '$Grupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>