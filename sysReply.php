<?php

$txt=$_POST["message"];

if($txt=="Button1"){

    $arr=["message"=> "replying button 1" ];

   
    
}elseif ($txt=="Button2") {
    $arr=["message"=> "replying button 2" ];
}
else{
    $arr=["message"=> "" ];
}

echo json_encode($arr);

?>

