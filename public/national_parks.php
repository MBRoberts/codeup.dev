<?php

	define("DB_HOST", "127.0.0.1");
	define("DB_NAME", "parks_db");
	define("DB_USER", 'parks_user');
	define("DB_PASS", 'password123');

	require '../db_connect.php';

	function pageController($dbc)
	{
		$limit = 4 ;
		$offset = (!empty($_GET)) ? (($_GET['page'] - 1	) * $limit) : 0 ;
		$stmt = $dbc->query('SELECT * FROM national_parks');

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
		<meta name="description" content="">
		<meta name="author" content="Ben Roberts">

		<title>National Parks</title>

		<!-- Bootstrap Core CSS CDN-->
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

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

			<table class="table table-striped table-bordered table-hover table-responsive">
				<th><h4 class="text-center">Row</h4></th>
				<th><h4 class="text-center">Name</h4></th>
				<th><h4 class="text-center">Location</h4></th>
				<th><h4 class="text-center">Date Established</h4></th>
				<th><h4 class="text-center">Area In Acres</h4></th>

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

			<?php if (!empty($_GET)){ 
				if ($_GET['page'] != 1){ ?>
					<a href="national_parks.php?page=<?=($_GET['page']-1)?>">
						<div style="margin-right:10px;" class="btn btn-lg btn-primary"><</div>
					</a>
				<?php }
			} ?>
				
			<?php $page = 1;
				for ($i = 0; $i <= $parkCount; $i+=$limit) { ?>
					<a href="national_parks.php?page=<?=$page?>"> 
						<div class="btn btn-primary">
							<?=$page++?>	
						</div>
					</a>
			<?php } 

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