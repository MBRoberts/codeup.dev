<?php

class Table
{
	private static $limit = 2;
	private static $offset;
	private static $query;
	private static $stmt;
	private static $stm;
	private static $btnRow;
	private static $page;
	private static $table;

	public static function insertPark($dbc) 
	{

		self::$insertQuery = 'INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (?, ?, ?, ?, ?)';

		self::$insertStmt = $dbc->prepare(self::$insertQuery);

		self::$insertStmt->execute(array($_GET['name'], $_GET['location'], $_GET['date_established'], $_GET['area_in_acres'], $_GET['description']));

	}

	private static function generateTable($parks)
	{
		self::$table = '';
		foreach ($parks as $park) { 
			self::$table .= "<tr><td>" . htmlspecialchars(strip_tags($park['id'])) . "</td>"
				. "<td>" . htmlspecialchars(strip_tags($park['name'])) . "</td>"
				. "<td>" . htmlspecialchars(strip_tags($park['location'])) . "</td>"
				. "<td>" . htmlspecialchars(strip_tags($park['date_established'])) . "</td>"
				. "<td>" . number_format(htmlspecialchars(strip_tags($park['area_in_acres']))) . "</td>"
				. "<td>" . htmlspecialchars(strip_tags($park['description'])) . "</td></tr>";
		};
		return self::$table;
	}

	private static function generateBtns($parkCount)
	{
		self::$btnRow = '';

		// Checks to see if there is a GET request then displays a previous button if the current page is not the first page
		if (isset($_GET['page'])) { 
			if ($_GET['page'] != 1) { 
				self::$btnRow .= "<a href='national_parks.php?page=" . htmlspecialchars(strip_tags(($_GET['page']-1))) . "'><div class='btn btn-lg btn-primary'> < </div></a>";
			}
		}
			
		// for loop starts count at 0, then adds the limit each time, passes to the href for page number.
		self::$page = 1;
		for ($i = 0; $i <= $parkCount; $i+=self::$limit) {
			self::$btnRow .= "<a href='national_parks.php?page=" . self::$page . "&limit=" . self::$limit . "'><div class='btn btn-primary'>" . self::$page. "</div></a>";
			self::$page++;
		}

		// Checks to see if there is a GET request then displays a next button if the current page is not the last page
		if (isset($_GET['page'])){ 
			if (($_GET['page']+1) < self::$page) {
				self::$btnRow .= "<a href='national_parks.php?page=" . htmlspecialchars(strip_tags(($_GET['page']+1))) . "&limit=" . self::$limit . "'><div class='btn btn-lg btn-primary'>></div></a>";
			}
		} else {
			self::$btnRow .= "<a href='national_parks.php?page=2'><div style='margin-left:10px;' class='btn btn-lg btn-primary'>></div></a>";
		}
		return self::$btnRow;
	}

	public static function getTable($dbc)
	{
		//  Determines how many results/page
		self::$limit = (isset($_GET['limit'])) ? (int)htmlspecialchars(strip_tags($_GET['limit'])) : 2;
		self::$stmt = $dbc->query('SELECT * FROM national_parks');

		// offset determines which result to start on in the query. One is subtracted to counteract the 'off-by-one error' then is multiplied by the limit. If there is no page # in the GET Request, it defaults to 0
		self::$offset = (isset($_GET['page'])) ? (int)(htmlspecialchars(strip_tags($_GET['page']) - 1	) * self::$limit) : 0;
		self::$query = 'SELECT * FROM national_parks LIMIT :limit OFFSET :offset';
		self::$stm = $dbc->prepare(self::$query);

		self::$stm->bindValue(':limit', self::$limit, PDO::PARAM_INT);
		self::$stm->bindValue(':offset', self::$offset, PDO::PARAM_INT);
		self::$stm->execute();

		return [
			'table' => self::generateTable(self::$stm->fetchAll(PDO::FETCH_ASSOC)),
			'btns' => self::generateBtns(self::$stmt->rowCount())
		];
		
	}
}