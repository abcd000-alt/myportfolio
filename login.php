<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
   
    //retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"]; 

    //Database connection
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "db_authentication";

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
    
    if($conn -> connect_error){
        die("Connection Failed: " . $conn -> connect_error);
    }

    //validate login - if the value is in the authenticator
    $query = "SELECT * FROM user_login WHERE username ='$username' AND password='$password' ";

    $result = $conn -> query($query);

    if($result->num_rows == 1){
        //Login Sucess
        header("Location: myport.html");   
        exit();
    }
    else{
        //login failed
        header("Location: login.html");
        
       
    }

    $conn -> close();
    exit();
}



