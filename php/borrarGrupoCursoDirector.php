<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $idcarrera = mysql_real_escape_string($data->Carrera);
  $idcurso = mysql_real_escape_string($data->Curso);

  $query= "CALL borrarCursoCarreraDirector('$idcarrera','$idcurso')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>