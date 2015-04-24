<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $nombRubb = mysql_real_escape_string($data->rubNomb);

  $query= "CALL borrarRubricaDirector('$nombRubb')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>