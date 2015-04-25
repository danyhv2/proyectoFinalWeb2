<?php
    include "config.php"; 
	$data = file_get_contents("php://input");
  	$correo1 = json_decode($data);
  	$correo2 = json_decode($data);
  	$desc1 = json_decode($data);
   	$sql= "CALL insertarPortafolio('$correo1->nombreC','$correo2->nombreC2','$desc1->nombreC3')";
    $result = mysqli_query($con, $sql);   

    if (!$result){
        echo "DB error";
        echo "MySQL error:" . mysqli_error();
        exit;
    }    

    $rows = array();
    while($r = mysqli_fetch_assoc($result)){
        $rows[] = $r;
    }

    mysqli_free_result($result);
    mysqli_close($con);
    echo json_encode($rows);
    
  ?>