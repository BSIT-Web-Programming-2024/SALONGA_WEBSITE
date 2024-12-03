
<?php
$servername = "localhost"; // Change if different
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "contact_db"; // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$contact = $_POST['contact'];

// Insert the data into the database
$sql = "INSERT INTO contacts (email, contact) VALUES ('$email', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
