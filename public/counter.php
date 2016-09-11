<?php

	function pageController()
	{
		$counter = [];

		if (isset($_GET['direction'])) { 
			$counter['value'] = ($_GET['direction'] == 'up') ?  $_GET['value'] + 1 : $_GET['value'] - 1;
		} else {
			$counter['value'] = 0;
		};

		return $counter;
	}

	extract(pageController());

?>


<DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Get Request</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<style>
			.container-fluid {
				border: 1px solid black; 
				box-shadow: -10px 10px 10px #555; 
				width: 40vw;
				background-color: #eee;
				text-shadow: 2px 2px 2px #555;
			}

			.jumbotron {
				text-shadow: 2px 2px 2px #555;
				font-size: 4em;
				box-shadow: -10px 10px 10px #555; 
				color: #008;
			}

		 </style>
	</head>
	<body>
		<div class="container text-center">
			<h1 class="jumbotron">Counter: <?= $value ?></h1>

			<a href="counter.php?direction=up&value=<?=$value;?>">
				<div class="container-fluid"><h2>UP</h2></div>
			</a>
			<br>

			<a href="counter.php?direction=down&value=<?=$value;?>">
				<div class="container-fluid"><h2>DOWN</h2></div>
			</a>
		</div>
	</body>
</html>








