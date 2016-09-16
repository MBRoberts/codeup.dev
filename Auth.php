<?php 

require_once "Log.php";

/**********************************************************
 *  Authorizes, checks login status, logs out of session  *
 *  @param string $username user inputted username		  *
 *  @param string $password user inputted password		  *
 **********************************************************/

class Auth
{
	public static $hash;

	public static function attempt($username, $password)
	{
		$message = "Login";

		self::$hash = password_hash($password, PASSWORD_DEFAULT);

		if($username == 'guest' && password_verify($password, self::$hash)) {

			$_SESSION['logged_in_user'] = $username;
			$_SESSION['is_logged_in'] = true;
			$_SESSION['stay_logged_in'] = Input::get('session');

			$signIn = new Log('cli');
			$signIn->info("User: {$username} logged in");

		} else {

			$badSignIn = new Log('cli');
			$badSignIn->error("User: {$username} log in failed");
			$message = "Error: Wrong Username or Password";

		}

		return $message;
		
	}

	public static function check()
	{
		if (isset($_SESSION['is_logged_in'])) {
			if ($_SESSION['is_logged_in'] === true){
				return true;
				
			} 
		}
	}

	public static function user()
	{
		if (!empty($_SESSION)) {
			return $_SESSION['logged_in_user'];
		}
	}

	public static function redirect($url)
	{
		header("Location: $url");
		die();
	}

	public static function logout()
	{
		// clear $_SESSION array
		session_unset();

		// delete session data on the server
		session_destroy();

		// ensure client is sent a new session cookie
		session_regenerate_id();
	}

}