<?php
include_once "config.php";

$sql = "CALL mostrar_reportes()"; 
$result = mysqli_query($con, $sql);

$lista = array();

while ($item = mysqli_fetch_array($result)) {
	$lista[] = $item;
   array_push($lista, $item);
    
}

echo json_encode($lista);
mysqli_close($con) or die('fallo');


?>