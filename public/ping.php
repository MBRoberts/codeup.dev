<?php 

require_once 'input.php';

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

		if (Input::has('q')) { 
			if ($_GET['q'] == 'hit') {
				$counter['pongValue'] = Input::get('pongValue') + 1;
				$counter['pingValue'] = Input::get('pingValue');
			} else {
				$counter['pongValue'] = 0;
				$counter['pingValue'] = Input::get('pingValue');
			};
		} else {
			$counter['pingValue'] = 0;
			$counter['pongValue'] = 0;
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
		<h1 class="jumbotron text-center">PING!!</h1>
		<div class="container text-center">

			<div id="ping-score">
				<h2>Ping: <?=$pingValue?></h2>
			</div>

			<div id="pong-score">
				<h2>Pong: <?=$pongValue?></h2>
			</div>

			<div><img id="match-box" src="<?=$images[0]?>"></div>
			
			<?php foreach ($divs as $div) { ?>
				<a href="pong.php?q=<?=$div['url']?>&pingValue=<?=$pingValue?>&pongValue=<?=$pongValue?>">
					<img class="box" src="<?=$images[$div['imgNum']]?>">
				</a>
			<?php }?>
			
		</div>
	</body>
</html>