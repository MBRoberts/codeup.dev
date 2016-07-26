<?php
    var_dump($_GET);
    var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Pizza Order</title>
	</head>
	<body>
		<h1>Pizza Order Form</h1>
		<form method="POST" action="/pizza_form.php">
			<p>
				<label for="quantity">How Many?</label>
				<input type="text" name="quantity" id="quantity">
			</p>
			<p>
				<label for="crust">Type of crust</label>
				<select id="crust" name="crust">
					<option value="pan">Pan</option>
					<option value="thin_crust">Thin Crust</option>
					<option value="brooklyn">Brooklyn Style</option>
				</select>
			</p>
			What Size?
			<p>
				<label><input type="radio" name="size" value="small">Small</label>
				<label><input type="radio" name="size" value="medium">Medium</label>
				<label><input type="radio" name="size" value="large">Large</label>
				<label><input type="radio" name="size" value="x-large">X-Large</label>				
			</p>
			What Toppings?
			<p>
				<label><input type="checkbox" name="toppings[]" value="pepperoni">Pepperoni<br><img src="/img/pepperoni.png"></label>
				<br>
				<label><input type="checkbox" name="toppings[]" value="sausage">Sausage<br><img src="/img/sausage.jpg"></label>
				<br>
				<label><input type="checkbox" name="toppings[]" value="ham">Ham<br><img src="/img/ham.jpg"></label>
				<br>
				<label><input type="checkbox" name="toppings[]" value="salami">Salami<br><img src="/img/salami.jpg"></label>
				<br>
				<label><input type="checkbox" name="toppings[]" value="steak">Steak<br><img src="/img/steak.jpg"></label>
			</p>
			<h3>Delivery Info</h3>
			<p>
				<label for="name">Name</label>
				<input id="name" name="name" type="text">
			</p>
			<p>
				<label for="address">Street Address</label>
				<input id="address" name="address" type="text">
			</p>
			<p>
				<label for="city">City</label>
				<input id="city" name="city" type="text">

				<label for="state">State</label>
				<input id="state" name="state" type="text">

				<label for="zip">Zip Code</label>
				<input id="zip" name="zip" type="text">
			</p>
			<h3>Credit Card Info</h3>
			<p>
				<label for="ccnum">Card Number</label>
				<input id="ccnum" name="zip" type="text">
			</p>
			<p>
				<label for="exp">Expiration</label>
				<input id="exp" name="exp" type="text">
			</p>

			<button type="submit">Send Order</button>
		</form>
	</body>
</html>