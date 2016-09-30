<?php

class Input
{
	public static $errors = [];

	/*************************************************************
	 *  Check if a given value was passed in the request         *
	 *             											 	 *
	 *  @param string $key index to look for in request          *
	 *  @return boolean whether value exists in $_POST or $_GET  *
	 *************************************************************/

	public static function has($key)
	{
		return array_key_exists($key, $_REQUEST);
	}

	/********************************************************************
	 *  Get a requested value from either $_POST or $_GET  				*
	 *																	*
	 *  @param string $key index to look for in index 					*
	 *  @param mixed $default default value to return if key not found  *
	 *  @return mixed value passed in request   						*
	 ********************************************************************/

	public static function get($key, $default = null)
	{
	
		if (self::has($key)) {
			return $_REQUEST[$key];
		} else {
			throw new Exception('Key not available!');
		}
		
	}

	public static function escape($input) 
	{
		return htmlspecialchars(strip_tags($input));
	}

	///////////////////////////////////////////////////////////////////////////
	//                      DO NOT EDIT ANYTHING BELOW!!                     //
	// The Input class should not ever be instantiated, so we prevent the    //
	// constructor method from being called. We will be covering private     //
	// later in the curriculum.                                              //
	///////////////////////////////////////////////////////////////////////////

	private function __construct() {}

	public static function getString($key)
	{
		
		if(!self::has($key)) {
			throw new Exception("Request does not contain key: '{$key}'");
		}
	

		$value = self::get($key);

		
		if (gettype($value) != 'string') {
			throw new Exception("Value at index '{$key}' does not exist");
		}
		
		return $value;
	}

	public static function getNumber($key)
	{
		
		if (!self::has($key)) {
			throw new Exception("Request does not contain key: '{$key}'");
		}

		$value = self::get($key);
		
		if (!is_numeric($value)){
			throw new Exception("Value '{$value}' is not a number!");
		}
		
	
		return (int)$value;

	}
}
