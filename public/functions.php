<?php 

function inputHas($key)
{
	return array_key_exists($key, $_REQUEST);
}


function inputGet($key)
{
	if (inputHas($key)) {
		return $_REQUEST[$key];
	} else {
		return null;
	}
}


function escape($input) 
{
	return htmlspecialchars(strip_tags($input));
}