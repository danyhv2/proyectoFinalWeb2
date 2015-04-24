<?php
    include "config.php"; 

  $data = json_decode(file_get_contents("php://input"));
  $valorRubro = mysql_real_escape_string($data->valRub);
  $nomRubro = mysql_real_escape_string($data->nomRub);
  $nombRubrica = mysql_real_escape_string($data->RubrNon);

  $query= "CALL editarRubroValor('$valorRubro', '$nomRubro', '$nombRubrica')";

  $result = mysqli_query($con, $query);

      if (!$result){
          echo "DB error";
          echo "MySQL error:" . mysqli_error($con);
          exit;
      }else{
        echo 'exito';
      }

?>