<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nomb = mysql_real_escape_string($data->idRub);

  $query= "CALL borrarRubrosRubrica('$nomb')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>