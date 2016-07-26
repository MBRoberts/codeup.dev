<?php
    var_dump($_GET);
    var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Clothes Shopping</title>
	</head>
	<body>
		<h1>Clothes Shopping</h1>
		<form method="GET" action="http://www1.macys.com/shop/search">
			<label for="clothes">Clothes to Search for</label>
			<input id="clothes" name="keyword" type="text">

			<button type="submit">Search</button>
		</form>

	</body>
</html>