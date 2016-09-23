<?php

	session_start();

	require_once '../Input.php';
	require_once '../Auth.php';

	function pageController() 
	{

		if (Auth::check()) {

			if (isset($_SESSION['logged_in_user'])) {
				
				if ($_SESSION['stay_logged_in'] == false) {
					Auth::logout();
				}

				return ['username' => Input::escape(Auth::user())];

			} else {
				Auth::redirect("/login.php");
			};

		} else {
			Auth::redirect("/login.php");
		};
	}
	
	extract(pageController());	
?>



<DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Authorized</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<style type="text/css">
			body {
				background-image: url(/img/fish.jpeg);
				background-size: cover;
				background-repeat: no-repeat;
			}
		</style>
	</head>
	<body>
		<main class="container text-center">
			<h1 class="jumbotron" style="background-color: rgba(59,97,125,.5); color: white;">WELCOME, <?= $username ?>...<br>To a pointless website!!<br><br>
			<a href="/logout.php"><div class="btn btn-primary">Now Leave !!</div></a></h1>
			
				
			
		</main>
	</body>
</html>