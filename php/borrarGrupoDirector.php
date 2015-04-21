<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $NombreGrupo = mysql_real_escape_string($data->nombreGruZ);

  $query= "CALL borrarGrupoCurso('$NombreGrupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>