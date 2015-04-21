<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $CorreoEstud = mysql_real_escape_string($data->correoEst);
  $GrupoEntr = mysql_real_escape_string($data->GrupoEnt);

  $query= "CALL agregarEstudiantesGrupo('$CorreoEstud','$GrupoEntr')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>