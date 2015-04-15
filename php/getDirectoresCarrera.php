<?php
    include "config.php"; 

    $sql= "SELECT u.nombre, u.primerApellido, u.segundoApellido, r.nombre as Role from usuarios u, roles r where u.userRole = 3 and r.id_role =3
";   
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