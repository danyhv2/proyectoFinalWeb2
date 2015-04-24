<?php
    include "config.php"; 

   $sql= "SELECT `id_rubrica`, `nombre` FROM `rubros_por_cursos` WHERE 1";   

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