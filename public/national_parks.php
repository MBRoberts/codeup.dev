<?php

	// Database connection configuration
	require_once '../national_parks_config.php';

	// Database connection
	require_once '../db_connect.php';

	// Input Class
	require_once '../Input.php';

	// Table Class
	require_once '../Table.php';

	// $dbc parameter is being pulled from db_connect.php file
	function pageController($dbc)
	{
		
		if(Input::has('name') && Input::has('location') && Input::has('date_established') && Input::has('area_in_acres') && Input::has('description')) {
			Table::insertPark($dbc);
			
		}

		// returns the parks rquested, a total count of the parks, and the pagination amount to be used in the html
		return Table::getTable($dbc);
		
	};

	extract(pageController($dbc));

?>

<!DOCTYPE html>

<html lang="en">
	<head>

		<meta charset="utf-8">
		<meta name="description" content="PHP Exercises">
		<meta name="keywords" content="National Parks">
		<meta name="author" content="Ben Roberts">

		<title>National Parks 
			<?php if (Input::has('page')) {
				echo " Page: " . Input::getString('page');
			 }?>
		</title>

		<!-- Facebook and Twitter integration -->
		<meta property="og:title" content="National Parks List" />
		<meta property="og:image" content="" />
		<meta property="og:url" content="" />
		<meta property="og:type" content="" />
		<meta property="og:description" content=""/>
		<meta name="twitter:title" content="" />
		<meta name="twitter:image" content="" />
		<meta name="twitter:url" content="" />
		<meta name="twitter:card" content="summary" />

		<!-- Bootstrap Core CSS CDN-->
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- Custom CSS -->
		<link rel="stylesheet" type="text/css" href="/css/national_parks.css">
		

	</head>
	<body>
		<div class="container text-center">

			<h1 class="jumbotron text-center">National Parks</h1>
			<form>
				<div class="form-group row">
					<label class="col-xs-2" for="limit">Selections per page
						<select id="limit" class="input" name="limit">
							<option value="2">2</option>
							<option value="4">4</option>
							<option value="6">6</option>
							<option value="8">8</option>
							<option value="10">10</option>
						</select>
						<button  type="submit" class="btn btn-primary">Go</button>
					</label>
					
				</div>
			</form>
			<!-- creating the table and adding in the table heads -->
			<table class="table table-striped table-bordered table-hover table-responsive">
				<th><h4 class="text-center">Row</h4></th>
				<th><h4 class="text-center">Name</h4></th>
				<th><h4 class="text-center">Location</h4></th>
				<th><h4 class="text-center">Date Established</h4></th>
				<th><h4 class="text-center">Area In Acres</h4></th>
				<th><h4 class="text-center">Description</h4></th>
				<?= $table ?>
			</table>
			<?= $btns ?>
			<br>
		</div><!--/.container text-center -->
		<br>
		<br>
		<div class="container">

			<?php foreach (Input::$errors as $error) { ?>
				<h2 style="color: red;"><?= $error ?></h2>
			<?php }?>

			<form>
				<div class="form-group row">
					<label for="name" class="col-xs-2 col-form-label ">Park Name</label>
					<div class="col-xs-8">
						<input type="text" pattern="([a-zA-Z])\w+" name="name" id="name" class="input-lg form-control" placeholder="Park Name" required>
					</div>
				</div>
				<div class="form-group row">
					<label for="location" class="col-xs-2 col-form-label">Location</label>
					<div class="col-xs-8">
						<input type="text" pattern="([a-zA-Z])\w+" name="location" id="location" class="input-lg form-control" placeholder="Location" required>
					</div>
				</div>
				<div class="form-group row">
					<label for="date_established" class="col-xs-2 col-form-label">Date Est</label>
					<div class="col-xs-8">
						<input type="date" name="date_established" class="input-lg form-control" id="date_established" required>
					</div>
				</div>
				<div class="form-group row">
					<label for="area_in_acres" class="col-xs-2 col-form-label">Area In Acres</label>
					<div class="col-xs-8">
						<input type="number" name="area_in_acres" class="input-lg form-control" id="area_in_acres" placeholder="Area In Acres" required>
					</div>
				</div>
				<div class="form-group row">
					<label for="description" class="col-xs-2 col-form-label">Description</label>
					<div class="col-xs-8">
						<textarea type="text" name="description" class="input-lg form-control" placeholder="Description" rows="4" cols="50"></textarea>
					</div>
				</div>
				<div class="form-group row text-center">
					<button type="submit" class="btn btn-lg btn-primary">Submit</button>
				</div>
			</form>
		</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>

		<!-- Jquery.js CDN -->
		<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
		<!-- Bootstrap.js CDN -->
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	</body>
</html>