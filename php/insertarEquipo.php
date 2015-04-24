<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombreEquipo = mysql_real_escape_string($data->nombreG);
  $nombreEstudiante = mysql_real_escape_string($data->nombreE);
  $nombreRol = mysql_real_escape_string($data->nombreR);
  $query= "CALL insertarEquipo('$nombreEquipo')";
  //$query= "CALL insertarEstudiantesEquipo('$nombreEquipo', $nombreEstudiante','$nombreRol')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>