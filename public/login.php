<?php

	session_start();

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

			$username = htmlspecialchars(strip_tags($_POST['username']));
			$password = htmlspecialchars(strip_tags($_POST['password']));

			if($username === "guest" && $password === "password") {

				$_SESSION['logged_in_user'] = $username;

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

<html lang="en" ng-app="loginModule">
	<head>
		<meta charset="utf-8">
		<title>Login Page</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="/css/login.css">
	</head>

	<body>
		<div class="container text-center col-xs-4 col-md-4 col-xs-offset-7 col-md-offset-7" id="login-form">
			<h2 class="label-lg"><?=$message?></h2>
			<form method="POST" novalidate>

				<div class="form-group row">
					<input class="input-lg
					" type="email" name="email" id="email" placeholder="Enter email" ng-model="user.email" required>
				</div>

				<div class="form-group row">
					<input class="input-lg
					" type="password" name="password" id="password" ng-model="user.password" placeholder="Enter Password" required>
				</div>

				<div class="form-group checkbox row">
					<label class="blue label-md">
	  					<input type="checkbox" class="active" ng-model="user.remember">
	 					Remember Me
					</label>
				</div>

				<button class="btn active btn-lg btn-primary" type="submit">Submit</button>

			</form>
		</div>

		<div class="jumbotron container display col-xs-4 col-md-4">
			<span> HELLO </span>
			<span> {{ user.email }} </span>
			<br>
			<span> {{ user.remember }} </span>
		</div>



		<!-- Jquery -->
		<script type="text/javascript" src="/js/jquery.min.js"></script>
		<!-- Bootsrtap.js -->
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
		<!-- Angular.js -->
		<script type="text/javascript" src="/js/angular.min.js"></script>
		<!-- Angular Module -->
		<script type="text/javascript" src="/js/loginModule.js"></script>

	</body>
</html>