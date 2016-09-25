<?php

	// Database connection configuration
	require '../national_parks_config.php';

	// Database connection
	require '../db_connect.php';

	// $dbc parameter is being pulled from db_connect.php file
	function pageController($dbc)
	{
		//  Determines how many results/page
		$limit = 4;

		// offset determines which result to start on in the query. One is subtracted to counteract the 'off-by-one error' then is multiplied by the limit. If there is no page # in the GET Request, it defaults to 0
		$offset = (!empty($_GET)) ? (($_GET['page'] - 1	) * $limit) : 0;  
		
		// $dbc is an instance, query() is a function call that uses SQL to gather everything from the database
		$stmt = $dbc->query('SELECT * FROM national_parks');  

		// returns the parks rquested, a total count of the parks, and the pagination amount to be used in the html
		return [
			'parks' => $dbc->query('SELECT * FROM national_parks LIMIT ' . $limit . ' OFFSET ' . $offset)->fetchAll(PDO::FETCH_ASSOC),
			'parkCount' => $stmt->rowCount(),
			'limit' => $limit
		];

	};

	extract(pageController($dbc));

?>

<!DOCTYPE html>

<html lang="en">
	<head>

		<meta charset="utf-8">
		<meta name="description" content="PHP Exercises">
		<meta name="author" content="Ben Roberts">

		<title>National Parks</title>

		<!-- Bootstrap Core CSS CDN-->
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- Custom CSS -->
		<style type="text/css">
			.container {
				background-color: rgba(0, 0, 0, .5);
				padding: 50px;
				margin-top: 50px;
				border-radius: 20px;
				box-shadow: 0px 0px 75px #000;
			}
			table,
			.jumbotron {
				background-color: white;
				box-shadow: 0px 0px 75px #fff;
			}
			.btn {
				box-shadow: 0px 0px 75px #fff;
			}
		</style>

	</head>
	<body style="background-image:url(img/ocean.jpg); background-size: cover; background-repeat: no-repeat;">

		<div class="container text-center">

			<h1 class="jumbotron text-center">National Parks</h1>

			<!-- creating the table and adding in the table heads -->
			<table class="table table-striped table-bordered table-hover table-responsive">
				<th><h4 class="text-center">Row</h4></th>
				<th><h4 class="text-center">Name</h4></th>
				<th><h4 class="text-center">Location</h4></th>
				<th><h4 class="text-center">Date Established</h4></th>
				<th><h4 class="text-center">Area In Acres</h4></th>

				<!-- foreach will iterate through all of the data using the key => value pairs -->
				<?php foreach ($parks as $park) { ?>
					<tr>
						<td> <?= $park['id'] ?> </td>
						<td> <?= $park['name'] ?> </td>
						<td> <?= $park['location'] ?> </td>
						<td> <?= $park['date_established'] ?> </td>
						<td> <?= $park['area_in_acres'] ?> </td>
					</tr>
				<?php } ?>

			</table>
			<br>

			<!-- Checks to see if there is a GET request then displays a previous button if the current page is not the first page -->
			<?php if (!empty($_GET)){ 
				if ($_GET['page'] != 1){ ?>
					<a href="national_parks.php?page=<?=($_GET['page']-1)?>">
						<div style="margin-right:10px;" class="btn btn-lg btn-primary"><</div>
					</a>
				<?php }
			} ?>
				
			<!-- for loop starts count at 0, then adds the limit each time, passes to the href for page number. -->
			<?php $page = 1;
			for ($i = 0; $i <= $parkCount; $i+=$limit) { ?>
				<a href="national_parks.php?page=<?=$page?>"> 
					<div class="btn btn-primary">
						<?=$page++?>	
					</div>
				</a>
			<?php }

			// Checks to see if there is a GET request then displays a next button if the current page is not the last page
			if (!empty($_GET)){ 
				if (($_GET['page']+1) < $page) { ?>
					<a href="national_parks.php?page=<?=($_GET['page']+1)?>">
						<div style="margin-left:10px;" class="btn btn-lg btn-primary">></div>
					</a>
				<?php }
			} else {?>
				<a href="national_parks.php?page=2">
						<div style="margin-left:10px;" class="btn btn-lg btn-primary">></div>
					</a>
			<?php } ?>

		</div><!--/.container text-center -->

		<!-- Jquery.js CDN -->
		<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
		<!-- Bootstrap.js CDN -->
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	</body>
</html>