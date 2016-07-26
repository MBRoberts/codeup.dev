<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>  My First Form  </title>
		<link rel="stylesheet" href="/css/first_form.css">
	</head>
	<body>
		<header>
			<h1>My First Form</h1>
		</header>

		<nav>
			<br>
			<a href="#login">Login Form</a> <br><br><br>
			<a href="#ddg">Search Duck Duck Go</a> <br><br><br>
			<a href="#email">Compose an Email</a> <br><br><br>
			<a href="#reddit">Search in Reddit</a> <br><br><br>
			<a href="#multi_choice">Multiple Choice Test</a> <br><br><br>
			<a href="#select_test">Select Test</a>  <br><br><br>
		</nav>

		<main id="main">
			<section id="login" class="form login">
				<h2>User Login</h2>	
				<form method="POST" action="/my_first_form.php">
					<p>
						<label for="username">Username</label>
						<input id="username" name="username" type="text" placeholder="Username" required>
						<em><abbr title="required">Required</abbr></em>
					</p>
					<p>
						<label for="password">Password</label>
						<input id="password" name="password" type="password" placeholder="Password" required>
						<em><abbr title="required">Required</abbr></em>
					</p>
					<p>
						<button type="submit">Log In</button>
					</p>
				</form>
			</section>	
				
			<section id="duck" class="form ddg">
					<h2>Search Duck Duck Go</h2>
					<form method="GET" action="https://duckduckgo.com">
						<p>
							<input name="q" type="text" placeholder="Search Here">
							<button type="Submit">Search</button>
						</p>
					</form>
			</section>
				
			<section class="form compose">
					<h2>Compose an Email</h2>
					<form id="email" method="POST" action="/my_first_form.php">
						<p>
							<textarea name="email" rows="10" cols="50" placeholder="Email Here"></textarea>
						</p>
						<label><input type="checkbox" name="mailling" value="yes" checked>Join Mailing List?</label>
						<button type="submit">Send</button>
					</form>
			</section>	

			<section class="form reddit">
					<h2>Search Reddit</h2>
					<a href="https://www.reddit.com/search?q=javascript&sort=new" taget="_blank">Search Reddit for javascript, sort by new</a>

					<form id="reddit" method="GET" target="_blank" action="https://www.reddit.com/search">
						<p>
							<input name="q" type="text" placeholder="Search Here">
							<br>
							
							<input id="top" name="sort" value="top" type="checkbox">
							<label for="top">Sort by Top?</label>

							<button type="submit">Search</button>
						</p>
					</form>
			</section>

			<section class="form test">
					<h2>Multiple Choice Test</h2>
					<form id="multi_choice" method="GET" action="/my_first_form.php">
						<ol>
							<p>
								<li>Where am I from?</li>
								<label><input type="radio" name="q1" value="Massachusetts">Massachusetts</label>
								<label><input type="radio" name="q1" value="New_England">New England</label>
								<label><input type="radio" name="q1" value="Boston">Boston</label>
								<label><input type="radio" name="q1" value="All_above">All of the Above </label>
							</p>
							<p>
								<li>What is the <strong>greatest</strong> sports franchise of all time?</li>
								<label><input type="radio" name="q2" value="Red_Sox">Red Sox</label>
								<label><input type="radio" name="q2" value="Bruins">Bruins</label>
								<label><input type="radio" name="q2" value="Patriots">Patriots</label>
								<label><input type="radio" name="q2" value="Celtics">Celtics</label>
								<label><input type="radio" name="q2" value="All_above">All of the Above</label>
							</p>
							<p>
								<li>What Languages will we learn at Codeup?</li>
								<label><input type="checkbox" name="q3[]" value="MySQL">MySQL</label>
								<label><input type="checkbox" name="q3[]" value="PHP">PHP</label>
								<label><input type="checkbox" name="q3[]" value="JavaScript">JavaScript</label>
								<label><input type="checkbox" name="q3[]" value="HTML5">HTML5</label>			
							</p>
							<p>
								<li><label for="q4">Where are you from?</label></li>

								<select id"q4" name="q4[]" multiple>
									<option value="texas">Texas</option>
									<option value="san_antonio">San Antonio</option>
									<option value="usa">USA</option>
									<option value="north_america">North America</option>
								</select>
							</p>

							<button type="submit">Submit Answers</button>
						</ol>
					</form>
			</section>

			<section class="form select">
					<h2>Select Testing</h2>
					<form id="select_test" method="GET" action="/my_first_form.php">
						<label for="q1">Do you own a car?</label>
						<select id="q1" name="q1">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</form>
			</section>
		</main>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</body>
</html>