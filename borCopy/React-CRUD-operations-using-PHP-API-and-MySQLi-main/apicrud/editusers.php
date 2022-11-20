<?php 
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

	
  $add = mysqli_query($db_conn,"update contracts set is_approved ='1'");

	if($add){
		echo json_encode(["success"=>true]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

?>