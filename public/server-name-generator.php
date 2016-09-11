<?php

	function randomElement($array)
	{
		return $array[rand(0, count($array)-1)];
	};


	function randomNameString($adjs, $nouns)
	{
		return randomElement($adjs) . "_" . randomElement($nouns);
	};


	function pageController()
	{
		$adjs = [
			"voracious",
			"agreeable",
			"thinkable",
			"materialistic",
			"somber",
			"shaky",
			"legal",
			"handsome",
			"slim",
			"political",
			"rotten",
			"picayune",
			"domineering",
			"willing",
			"adorable",
			"futuristic",
			"toothsome",
			"determined",
			"sincere",
			"weak",
			"premium",
			"prickly",
			"deranged",
			"accidental",
			"strange",
			"depressed",
			"curious",
			"irate",
			"wrathful",
			"puzzling",
			"wry",
			"young",
			"skillful",
			"plastic",
			"tranquil",
			"receptive",
			"nappy",
			"smooth",
			"cooperative",
			"better",
			"aggressive",
			"clear",
			"striped",
			"handsomely",
			"knowing",
			"mean",
			"poor",
			"infamous",
			"complex",
			"foolish"
		];
		$nouns = [
			"sweater",
			"butter",
			"ants",
			"religion",
			"turkey",
			"front",
			"snow",
			"hobbies",
			"cook",
			"government",
			"line",
			"shelf",
			"party",
			"pancake",
			"deer",
			"quilt",
			"nerve",
			"cherry",
			"surprise",
			"paper",
			"shoe",
			"trucks",
			"art",
			"low",
			"love",
			"dad",
			"boy",
			"sister",
			"window",
			"month",
			"silver",
			"flavor",
			"land",
			"rice",
			"toothbrush",
			"desire",
			"robin",
			"meeting",
			"lettuce",
			"tax",
			"horse",
			"grandfather",
			"run",
			"tail",
			"level",
			"writing",
			"creature",
			"sand",
			"wave",
			"discussion"
		];
		return randomNameString($adjs, $nouns);
	}

	$nameString = pageController();

?>

<DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Random Names</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
	</head>
	<body style="background-color: #444">
		<div class="container jumbotron text-center" style="text-shadow: 3px 3px #999; margin-top: 100px; box-shadow: 0px 0px 100px #fff; border-radius: 100%;">
			<h1>Server Name:  </h1>
			<h1><?= $nameString ?></h1>
		</div>
	</body>
</html>
























