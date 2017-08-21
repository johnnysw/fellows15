<?php
    $name = $_GET["name"];
    $callback = $_GET["callback"];
    //业务逻辑代码。。。。


//    echo "alert(".$name.");";
    echo $callback."(".$name.")";
?>
