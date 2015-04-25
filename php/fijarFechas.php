<?php
    include "config.php"; 
	$data = file_get_contents("php://input");
  	$nombreGRu = json_decode($data);
  	$fecha1 = json_decode($data);
  	$fecha2 = json_decode($data);
   	
   	$sql= "CALL fijarFechasArchivos('$nombreGRu->nombreE','$fecha1->nombreF1','$fecha2->nombreF2')";
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