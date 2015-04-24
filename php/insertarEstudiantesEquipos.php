<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombreEquipo = mysql_real_escape_string($data->nombreG);
  $correoEstudiante = mysql_real_escape_string($data->nombreE);
  $nombreRol = mysql_real_escape_string($data->nombreR);
  $idCurso = mysql_real_escape_string($data->nombreId);

  $query= "CALL insertarEstudiantesEquipo('$nombreEquipo','$correoEstudiante','$nombreRol','$idCurso')";
  //mysqli_query("INSERT INTO estudiantes_equipo(`nombreEstudiante`, `nombre_equipo`, `Rol`)VALUES('".$nombreEstudiante."','".$nombreEquipo."','".$nombreRol."')");

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>