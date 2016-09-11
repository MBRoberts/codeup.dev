<?php

	session_start();

	if (empty($_SESSION)) {

		header("Location: /login.php");
		die();

	} else {

		if ($_SESSION['logged_in_user'] === 'guest') {
			$username = htmlspecialchars(strip_tags($_SESSION['logged_in_user']));
		} else {
			header("/login.php");
			die();
		};
	};
?>



<DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Authorized</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<style type="text/css">
			body {
				background-image: url(/img/mountains.jpeg);
				background-size: cover;
				background-repeat: no-repeat;
			}
		</style>
	</head>
	<body>
		<main class="container text-center">
			<h1 class="jumbotron">WELCOME, <?= $username ?>!!</h1>
			
				<a href="/logout.php"><div class="btn btn-primary">Now Leave !!</div></a>
			
		</main>
	</body>
</html>