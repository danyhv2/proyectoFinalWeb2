<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombrePrfGrupo = mysql_real_escape_string($data->nombreGruPrZ);

  $query= "CALL borrarProfesoresGrupo('$nombrePrfGrupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>