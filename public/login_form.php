<?php
    var_dump($_GET);
    var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login Form</title>
	</head>
	<body>
		<h1>Login Form</h1>
		<form method="POST" action="/login_form.php">
			
			<p>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" placeholder="Enter Username" required>
				<strong><abbr title="required">*</abbr></strong>
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" name="password" type="password" placeholder="Enter Password" required>
				<strong><abbr title="required">*</abbr></strong>
			</p>
			<p>
			<lable><input type="checkbox" name="save_name" value="yes"> Remember Me?</label>
			</p>
			<button type="submit">Login</button>
		</form>

	</body>
</html>