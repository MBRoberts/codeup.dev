<?php

	function pageController()
	{
		$favThings = [];
		$favThings['favoriteThings'] = ["Computers", "Laptops", "Desktops", "Game Consoles", "And Other Stuff"];
		return $favThings;
	};

$favThings = pageController();
extract($favThings);
?>

<DOCTYPE html>

	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>PHP Table</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container" style="margin-top: 100px; width: 500px;">
			<table class="text-center table table-striped table-hover" style="box-shadow: 10px 10px 10px #444; border: 1px solid black; font-size: 2em;font-family: Digital-7;">
				<th class="text-center">Favorite Things</th>

				<?php foreach($favoriteThings as $thing): ?>
					<tr>
						<td><?= $thing ?></td>
					</tr>
				<?php endforeach; ?>

			</table>
		</div>
	</body>
</html>