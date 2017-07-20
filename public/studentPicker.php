<?php 

	function randomColor(){
		// color array with 10 colors
		$randomColor = ['#42829E', '#BEB2C8', '#F27A6A', '#F9CD52', '#C2EFEB', '#7364AD', '#ECFEE8', '#90A351', '#E26158', '#CDD6D0'];

		// generates a number to act as an index for the randomColor array
		$randomNumber = mt_rand(0, count($randomColor));

		$color = $randomColor[$randomNumber];

		return $color;
	}


	function randomStudent(){
		// array of all students currently in the class
		$students = ['Amberlee', 'Bich', 'Cara', 'Carlos', 'Daniel', 'Delenor', 'Derek', 'Dusty', 'Emilio', 'Everardo', 'Ian', 'Jaime', 'James', 'Jason', 'Joshua', 'Larry', 'Marcus', 'Melody', 'Micah', 'Mike', 'Moses', 'Rene', 'Roxana', 'Sarah', 'Tuesday', 'Violet'];

		// generates a number to act as an index for the students array
		$randomNumber = mt_rand(0, count($students));

		$student = $students[$randomNumber];

		return $student;
	}

?>



<!DOCTYPE html>
<html>
<head>
	<title>Random Student Generator</title>

	<style type="text/css">
		body {
			background-color: #363638;
		}

		h1 {
			color: <?= randomColor() ?>;
			font-size: 6vw;
			text-align: center;
		}

		h1.student {
			font-size: 15vw;
		}

		hr {
			border: 2px solid <?= randomColor() ?>;
		}

	</style>
</head>
<body>

<h1>THE GENERATOR HAS CHOSEN: </h1>
<hr>
<h1 class="student"><?= randomStudent(); ?></h1>

</body>
</html>