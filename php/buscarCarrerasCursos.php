<?php
    include "config.php"; 

   $sql= "SELECT c.nombre as nombreCurso, cc.id_curso, cc.id_carrera, car.nombre as nombreCarrera from cursos c, cursos_carreras cc, carreras car where cc.id_curso = c.id_curso and cc.id_carrera = car.id_carrera;";   

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