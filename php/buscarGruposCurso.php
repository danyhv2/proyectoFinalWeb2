<?php
    include "config.php"; 

   $sql= "SELECT `NombreDelCurso`, `NombreDelGrupo` FROM `gruposcurso`"; 
   //SELECT `NombreEstudiante`, `GrupoAsignado` FROM `estudiantes_por_grupo` WHERE `GrupoAsignado` = 'grupo 1';
   //SELECT `NombreDelCurso`, `NombreDelGrupo` FROM `gruposcurso` WHERE `NombreDelGrupo` = 'grupo 1';
   //SELECT `NombreProfesor`, `Rol` FROM `profesores_por_grupo` WHERE `GrupoAsignado` = 'grupo nabos'

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