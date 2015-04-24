<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombreRubrica = mysql_real_escape_string($data->nRub);
  $nombreCurso = mysql_real_escape_string($data->CuNob);

  $query= "CALL agregarRubricaCursoDirector('$nombreRubrica', '$nombreCurso')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>