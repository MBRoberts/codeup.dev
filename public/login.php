<?php

	session_start();

	require_once 'functions.php';

	function sessionCheck()
	{
		if (!empty($_SESSION)) {

			if ($_SESSION['logged_in_user'] === 'guest') {
				header("Location: http://codeup.dev/authorized.php");
				die();
			}
		}
	}


	function pageController()
	{
		$message = 'Login: ';

		if(!empty($_POST) || !empty($_GET)) {

			$username = escape(inputGet('username'));
			$password = escape(inputGet('password'));

			if($username === "guest" && $password === "password") {

				$_SESSION['logged_in_user'] = $username;
				$_SESSION['is_logged_in'] = true;
				
				header("Location: http://codeup.dev/authorized.php");
				die();

			} else {
				$message = "Error: Wrong Username or Password";
			};

		};

		return [
			'message' => $message
		];

	}

	sessionCheck();
	extract(pageController());
?>


<DOCTYPE html>

<html lang="en">
	<head>
	
		<meta charset="utf-8">
		<title>Login Page</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="/css/login.css">

	</head>

	<body>
		<div class="container text-center col-xs-4 col-md-4 col-xs-offset-7 col-md-offset-7" id="login-form">

			<h2 class="label-lg"><?=$message?></h2>

			<form method="POST">

				<div class="form-group row">
					<input class="input-lg
					" type="text" name="username" id="username" placeholder="Enter Username" required>
				</div>

				<div class="form-group row">
					<input class="input-lg
					" type="password" name="password" id="password" placeholder="Enter Password" min-length="6" required>
				</div>

				<div class="form-group checkbox row">
					<label class="blue label-md">
	  					<input type="checkbox" class="active">
	 					Remember Me
					</label>
				</div>

				<button class="btn active btn-lg btn-primary" type="submit">Submit</button>

			</form>
		</div>

		<!-- Jquery -->
		<script type="text/javascript" src="/js/jquery.min.js"></script>
		<!-- Bootsrtap.js -->
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>

	</body>
</html>