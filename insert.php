
<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="portfolio";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$email = $_POST["email"];

if($email!=''){
    $sql = "INSERT INTO email (id,email,datetime)
VALUES ('', '".$email."', now())";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
   header("Location:index.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
    //$msg="Thank you for subscribing";
}
?>
