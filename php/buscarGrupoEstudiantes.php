<?php
    include "config.php"; 

   $sql= "SELECT estudiantes_por_curso.grupoAsignado, estudiantes_por_curso.correo_estudiante, CONCAT( usuarios.nombre,' ', usuarios.primerApellido,' ', usuarios.segundoApellido) AS NombreEstudiante
FROM estudiantes_por_curso
INNER JOIN usuarios
ON estudiantes_por_curso.correo_estudiante=usuarios.correo";




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