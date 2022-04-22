<?php
$dir ="fotos/";
$destino = $dir .basename($_FILES["btnimg"]["name"]);
if(move_uploaded_file($_FILES["btnimg"]["tmp_name"], $destino)){
    $jsonAnswer = array('respPHP' => 'el archivo'.basename($_FILES["btnimg"]["name"]). 'ha sido subido');
    echo json_encode($jsonAnswer);
} else {
    $jsonAnswer =array(respPHP =>"error el archivo no se pudo subir" );
    echo json_encode($jsonAnswer);
}

?>