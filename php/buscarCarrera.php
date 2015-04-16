<?php
include "config.php"; 

$data = file_get_contents("php://input");

$objData = json_decode($data);

   $sql= "SELECT nombre, codCarrera FROM carreras  where nombre = '$objData->data'";

	$result = mysqli_query($con, $sql);   

   
     /*if(mysqli_num_rows($result)== 0){
        	echo 'No existe';
			}
			else {
				while($r = mysqli_fetch_assoc($result)){
					echo $r['producto'];
				}
			}   */ 



    $rows = array();
    while($r = mysqli_fetch_assoc($result)){
        $rows[] = $r;
    }

    mysqli_free_result($result);
    mysqli_close($con);
    $convertedString= json_encode($rows);
   // echo utf8_encode(json_encode($rows));
     echo mb_convert_encoding($convertedString, "UTF-8")
?>