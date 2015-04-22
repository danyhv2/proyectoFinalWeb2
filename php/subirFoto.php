<?php
include "config.php"; 

	/*$data = json_decode(file_get_contents("php://input"));

	  $filename = $_FILES['file']['name'];
  	  $destination = '/uploads' . $filename;
  	  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
  	  echo $filename;*/




    if(isset($_FILES['file'])){    
    $errors= array();        
    $file_name = $_FILES['file']['name'];
    $file_size =$_FILES['file']['size'];
    $file_tmp =$_FILES['file']['tmp_name'];
    $file_type=$_FILES['file']['type'];
    $nombre_foto = '231231232';
    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    $extensions = array("jpeg","jpg","png");        
    if(in_array($file_ext,$extensions )=== false){
         $errors[]="image extension not allowed, please choose a JPEG or PNG file.";
    }
    if($file_size > 2097152){
        $errors[]='File size cannot exceed 2 MB';
    }               
    if(empty($errors)==true){
        move_uploaded_file($file_tmp,"../uploads/".$nombre_foto.".jpg");
        echo " uploaded file: " . "images/" . $file_name;
    }else{
        print_r($errors);
    }
}
else{
    $errors= array();
    $errors[]="No image found";
    print_r($errors);
}


?>