<?php
define("DB_HOST", "127.0.0.1");
define("DB_NAME", "join_test_db");
define("DB_USER", 'codeup');
define("DB_PASS", 'password123');

abstract class Model
{
	/** @var PDO|null Connection to the database */
	protected static $dbc = null;
	protected static $table = "users";

	/** @var array Database values for a single record. Array keys should be column names in the DB */
	protected $attributes = array();

	/**
	 * Constructor
	 *
	 * An instance of a class derived from Model represents a single record in the database.
	 *
	 * $param array $attributes Optional array of database values to initialize the model record with
	 */
	public function __construct(array $attributes = array())
	{
		self::dbConnect();

		// @TODO: Initialize the $attributes property with the passed value
		$this->attributes = $attributes;
	}

	/**
	 * Connect to the DB
	 *
	 * This method should be called at the beginning of any function that needs to communicate with the database
	 */
	protected static function dbConnect()
	{
		if (!self::$dbc) {
			
			// Get new instance of PDO object
			$dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);

			// Tell PDO to throw exceptions on error
			$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			self::$dbc = $dbc;
		}
	}

	/**
	 * Get a value from attributes based on its name
	 *
	 * @param string $name key for attributes array
	 *
	 * @return mixed|null value from the attributes array or null if it is undefined
	 */
	public function __get($name)
	{
		// @TODO: Return the value from attributes for $name if it exists, else return null
		if (isset($this->attributes[$name])) {
			return $this->attributes[$name];
		}
		return null;
	}

	/**
	 * Set a new value for a key in attributes
	 *
	 * @param string $name  key for attributes array
	 * @param mixed  $value value to be saved in attributes array
	 */
	public function __set($name, $value)
	{
		// @TODO: Store name/value pair in attributes array
		$this->attributes[$name] = $value;
	}

	/** Store the object in the database */
	public function save()
	{
		// @TODO: Ensure there are values in the attributes array before attempting to save
		if (!empty($this->attributes)) {
			// @TODO: Call the proper database method: if the `id` is set this is an update, else it is a insert
			if (isset($this->attributes['id'])) {
				$this->update();
			} else {
				$this->insert();
			}
		}
	}
	
	/**
	 * Insert new entry into database
	 *
	 * NOTE: Because this method is abstract, any child class MUST have it defined.
	 */
	protected abstract function insert();
	// {
	//     $query = 'INSERT INTO ' . self::$table . ' (';
		
	//     foreach ($attributes as $key => $attribute) {
	//         $query .= "{$key}, ";
	//     }

	//     $query .= ") VALUES (";

	//     foreach ($attributes as $key => $attribute) {
	//         $query .= ":{$key}, ";
	//     }

	//     $query .= ")";

	//     self::$dbc->prepare($query);

	//     foreach ($attributes as $key => $attribute) {
	// 		if (gettype($attribute) == 'string') {
	// 			$query->bindValue(":{$key}", $this->attributes["{$key}"], PDO::PARAM_STR);
	// 		} else if (gettype($attribute) == 'int') {
	// 			$query->bindValue(":{$key}", $this->attributes["{$key}"], PDO::PARAM_INT);
	// 		}
	//     }

	//     $query->execute();

	//     $id = self::$dbc->lastInsertId();
	//     $this->attributes['id'] = $id;
	// }


	/**
	 * Update existing entry in database
	 *
	 * NOTE: Because this method is abstract, any child class MUST have it defined.
	 */
	protected abstract function update();
	// {
	// 	$query = 'UPDATE ' . self::$table . ' (';
		
	// 	foreach ($attributes as $key => $attribute) {
	// 		$query .= "{$key}, ";
	// 	}

	// 	$query .= ") VALUES (";

	// 	foreach ($attributes as $key => $attribute) {
	// 		$query .= ":{$key}, ";
	// 	}

	// 	$query .= ") WHERE id = :id";

	// 	self::$dbc->prepare($query);

	// 	foreach ($attributes as $key => $attribute) {
	// 		if (gettype($attribute) == 'string') {
	// 			$query->bindValue(":{$key}", $this->attributes["{$key}"], PDO::PARAM_STR);
	// 		} else if (gettype($attribute) == 'int') {
	// 			$query->bindValue(":{$key}", $this->attributes["{$key}"], PDO::PARAM_INT);
	// 		}
	// 	}

	// 	$query->execute();
	// }
}
