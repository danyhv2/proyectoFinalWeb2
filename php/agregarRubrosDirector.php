<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombre = mysql_real_escape_string($data->nomb);
  $valor = mysql_real_escape_string($data->valr);
  $RubNombre = mysql_real_escape_string($data->rubNomb);

  $query= "CALL agregarRubrosDirector('$nombre','$valor', '$RubNombre')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>