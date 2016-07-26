<?php
    var_dump($_GET);
    var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Registration Form</title>
	</head>
	<body>
		<header><h1>Registration</h1></header>

		<form method="POST" action="/registration_form.php">
			<p>
				<label for="first_name">First Name</label>
				<input id="first_name" name="first_name" type="text" placeholder="Enter Last Name">
			</p>
			<p>
				<label for="last_name">Last Name</label>
				<input id="last_name" name="last_name" type="text" placeholder="Enter Last Name">
			</p>
			<p>
				<textarea name="email" rows="10" cols="30" placeholder="Write Email Here"></textarea>
			</p>
			<p>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" placeholder="Enter Username">
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" name="password" type="password" placeholder="Enter Password">
			</p>
			<p>
				<label for="confirm">Confirm Password</label>
				<input id="confirm" name="confirm" type="password" placeholder="Confirm Password">
			</p>
			<p>
				<label><input name="newsletter" value ="yes" type="checkbox" checked>Sign up for newsletter</label>
			</p>
			<button type="submit">Send</button>
		</form>
	</body>
</html>