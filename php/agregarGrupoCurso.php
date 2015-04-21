<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $NombreCurso = mysql_real_escape_string($data->nombreC);
  $NombreGrupo = mysql_real_escape_string($data->nombreG);

  $query= "CALL agregarGrupoDirector('$NombreCurso','$NombreGrupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>