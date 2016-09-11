<?php 

function randomDiv()
{
	$divArray = [
		[ 	
			'url' => 'hit',
			'imgNum' => 0
		],[
			'url' => 'miss',
			'imgNum' => 1
		],[
			'url' => 'miss',
			'imgNum' => 2
		],[
			'url' => 'miss',
			'imgNum' => 3
		],[
			'url' => 'miss',
			'imgNum' => 4
		]
	];

	shuffle($divArray);
	return $divArray;
}


function randomImage() 
{
	$imageArray = [
		"/img/ball.png",
		"/img/happy_ball.png",
		"/img/crazy_ball.png",
		"/img/wink_ball.png",
		"/img/sad_ball.png"
	];
	shuffle($imageArray); 
	return $imageArray;
}

function pageController()
	{
		$counter = [];

		if (isset($_GET['q'])) { 
			if ($_GET['q'] == 'hit') {
				$counter['pingValue'] = $_GET['pingValue'] + 1;
				$counter['pongValue'] = $_GET['pongValue'];
			} else {
				$counter['pingValue'] = 0;
				$counter['pongValue'] = $_GET['pongValue'];
			}
		} else {
			$counter['pongValue'] = 0;
			$counter['pingValue'] = 0;
		};

		return $counter;
	}

	extract(pageController());
	$images = randomImage();
	$divs = randomDiv();
?>

<DOCTYPE html>

<html lang="en">
	<head>

		<meta charset="utf-8">
		<title>PING PONG</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="/css/ping-pong.css">

	</head>
	<body>

		<div class="container text-center">
			<h1 class="jumbotron text-center">PONG!!</h1>
			
			<div id="ping-score">
				<h2>Ping: <?=$pingValue?></h2>
			</div>

			<div id="pong-score">
				<h2>Pong: <?=$pongValue?></h2>
			</div>

			<div><img id="match-box" src="<?=$images[0]?>"></div>
			
			<?php foreach ($divs as $div) { ?>

				<a href="ping.php?q=<?=$div['url']?>&pingValue=<?=$pingValue?>&pongValue=<?=$pongValue?>">
					<img class="box" src="<?=$images[$div['imgNum']]?>">
				</a>

			<?php }?>
				
		</div>
	</body>
</html>














