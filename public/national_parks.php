<?php 
define("DB_HOST", "127.0.0.1");
define("DB_NAME", "parks_db");
define("DB_USER", 'parks_user');
define("DB_PASS", 'password123');

require '../db_connect.php';

function pageController($dbc)
{

	$offset = (!empty($_GET)) ? $_GET['offset'] : 0 ;


	$stmt = $dbc->query('SELECT * FROM national_parks');

	return [
		'parks' => $dbc->query('SELECT * FROM national_parks LIMIT 4 OFFSET ' . $offset)->fetchAll(PDO::FETCH_ASSOC),
		'parkCount' => $stmt->rowCount()
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

	</head>
	<body>
		<div class="container text-center">

			<h1 class="jumbotron text-center" style="margin-top:100px;">National Parks</h1>

			<table class="table table-striped table-bordered" style="margin-top: 100px;">
				<th><h4 class="text-center">Row</h4></th>
				<th><h4 class="text-center">Name</h4></th>
				<th><h4 class="text-center">Location</h4></th>
				<th><h4 class="text-center">Date Established</h4></th>
				<th><h4 class="text-center">Area In Acres</h4></th>

				<?php foreach ($parks as $index => $park) { ?>
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

			<?php for($i = 0; $i <= $parkCount; $i+=4) { ?>
				<a href="national_parks.php?offset=<?=$i?>"><div class="btn btn-primary"><?=($i+1)?> - <?=($i+4)?></div></a>
			<?php } ?>
		</div><!--/.container text-center -->

		<!-- Jquery.js CDN -->
		<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
		<!-- Bootstrap.js CDN -->
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	</body>
</html>