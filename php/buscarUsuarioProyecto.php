
<?php
    include "config.php"; 
	$data = file_get_contents("php://input");
  	$correo1 = json_decode($data);
   	
   	$sql= "CALL buscarUsuarioProyecto('$correo1->nombreCCC')";
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