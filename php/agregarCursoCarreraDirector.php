<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $idCarrera = mysql_real_escape_string($data->Carrera);
  $idCurso = mysql_real_escape_string($data->Curso);

  $query= "CALL agregarCursoCarreraDirector('$idCarrera', '$idCurso')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>