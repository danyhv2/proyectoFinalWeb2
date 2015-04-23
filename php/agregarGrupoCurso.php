<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $IdCurso = mysql_real_escape_string($data->IdC);
  $NombreGrupo = mysql_real_escape_string($data->nombreG);

  $query= "CALL agregarGrupoDirector('$IdCurso','$NombreGrupo')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>