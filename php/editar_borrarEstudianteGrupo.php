<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $GrupoEntr = mysql_real_escape_string($data->GrupoExt);
  $Correo = mysql_real_escape_string($data->correoExt);

  $query= "CALL Editar_borrarEstudiantesGrupo('$GrupoEntr', '$Correo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>