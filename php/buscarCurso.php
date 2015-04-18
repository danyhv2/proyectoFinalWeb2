<?php
include "config.php"; 

$data = file_get_contents("php://input");

$objData = json_decode($data);

   $sql= "CALL buscarCurso('$objData->data')";

	   $result = mysqli_query($con, $sql);   

    $rows = array();
    while($r = mysqli_fetch_assoc($result)){
        $rows[] = $r;
    }
    mysqli_free_result($result);
    mysqli_close($con);
    echo json_encode($rows);
   

   
?>