<?php
    include "config.php"; 
	$data = file_get_contents("php://input");
  	$nombreGrupo = json_decode($data);
   	
   	$sql= "CALL buscarIds('$nombreGrupo->nombreId')";
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