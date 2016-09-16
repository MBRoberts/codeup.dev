<?php

	session_start();
	
	require_once '../Auth.php';

	Auth::logout();

	Auth::redirect("/login.php");