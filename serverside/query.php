<?php

//Define CORS headers for security
header("Access-Control-Allow-Origin: https://minecraftkixx.github.io");
header("Access-Control-Allow-Origin: null");
header('Content-Type: application/json');

// Parse the request body as JSON
$query = file_get_contents('php://input');

// Connect to the database
 $servername = "localhost";
 $username = "guest";
 $password = "";
 $database = "dealership";
 $conn = mysqli_connect($servername, $username, $password, $database);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare and execute the SQL query
$result = mysqli_query($conn, $query);

// Check if the query was successful
if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

//Create an array object for the results to be saved to
$results = array();
if($result->num_rows > 0) {
    while ( $row = $result->fetch_assoc()) {
        $results[] = $row;
    }
}



//Print the encoded query
echo json_encode($results);


// Close the connection
mysqli_close($conn);

?>