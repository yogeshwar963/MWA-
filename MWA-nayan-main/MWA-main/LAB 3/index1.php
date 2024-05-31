<?php

$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$weight = $_POST['weight'];
$bldgrp = $_POST['bldgrp'];
$months = $_POST['months'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$city = $_POST['city'];
$pin = $_POST['pin'];

$conn = new mysqli('localhost', 'root', '', 'donors');
    if($conn->connect_error){
        die('connection failed : ' .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into blooddonor(name, age, gender, weight, bldgrp,
        months, email, mobile, city, pin) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssssss",$name, $age, $gender, $weight, $bldgrp,
        $months, $email, $mobile, $city, $pin);
        $stmt->execute();
        echo "registration successful...";
        $stmt->close();
        $conn->close();
    }
?>