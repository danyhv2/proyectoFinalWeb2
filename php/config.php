<?php
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!
define('DB_NAME', 'proyectoFinalWeb');
define('DB_USER', 'root');
define('DB_PASSWORD', NULL);
define('DB_HOST', 'localhost'); 

    $con = mysqli_connect(DB_HOST, DB_USER,DB_PASSWORD, DB_NAME);
	
	if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL". mysqli_connect_error();
    } 

?>