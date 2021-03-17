<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    	<title>Hw2</title>
        <link rel="stylesheet" href="form.css">
	</head>

	<body>
		<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "music-db";

		// Create server connection
		$conn = new mysqli($servername, $username, $password, $dbname);

		// Check server connection
		if ($conn->connect_error) {
		  	die("Connection failed: " . $conn->connect_error);
		}
		// getting songs
		if(isset($_REQUEST["retrieve"])){
		  	// Variables for the output and the web form below
		  	$array = array();
		  	$username2 = $_REQUEST['username2'];

		  	// Check that the user entered data in the form
		  	if(!empty($username2)){
		    // If so, prepare SQL query with the data
		    	$sql_query = "SELECT * FROM ratings WHERE username = ('$username2')";
		    	// Send the query and obtain the result
		    	$result = mysqli_query($conn, $sql_query);
				while ($row = mysqli_fetch_assoc($result)) {
		    		array_push($array, $row['song'] . " -> " . $row['rating']);
				}
		  	}
		  	else {
		    	array_push($array, "No songs available!");
		  	}
		}

		?>


		<!-- interface-->
		<form action="" method="POST" class="form-container">
	        <div class="form-title">
	            <h1>Music Database</h1>
	            <h2>Registration</h2>
	        </div>
	        <div class="info">
	            <label for="username">Username: </label>
	            <input type="text" name="username1" id="username" placeholder="Enter username">
	        </div>
	        <div class="info">
	            <label for="password">Password: </label>
	            <input type="password" name="password" id="password" placeholder="Enter password">
	        </div>
	        <div class="button">
	            <input type="submit" name="register" value="Register">
	        </div>
	        <div class="second-form">
	            <h1>Retrieve songs by username</h1>
	        </div>
	        <div class="info">
	            <label for="username">Username: </label>
	            <input type="text" name="username2" id="username" placeholder="Enter username">
	        </div>
	        <div class="button">
	            <input type="submit" name="retrieve" value="Retrieve">
	        </div>
			<div class="songs">
			<?php
				// adding users
				if (isset($_REQUEST["register"])) {
					$username1 = $_REQUEST['username1'];
					$password = $_REQUEST['password'];

					if (mysqli_query($conn, "INSERT INTO users (username, password) VALUES ('$username1', '$password')")) {
						echo "User created successfully";
					}
				}
				$conn->close();

				if (!empty($array)) {
					for ($i = 0; $i < count($array); $i++)
						echo '<p>' . $array[$i] . '</p>';
				}
				?>
			</div>
	    </form>











	</body>









</html>
