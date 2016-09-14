<?php

function redirect($location)
{
    header("Location: $location");
    exit();
}


function isUserAuthenticated()
{
    return !isset($_SESSION['logged_in_user']);
}


function user()
{
    return $_SESSION['logged_in_user'];

}

function authenticate($username, $password)
{
    if ($username == 'guest' && $password == 'password') {
        $_SESSION['logged_in_user'] = $username;
        return true;
    }
    return false;
}


function isPost()
{
    return $_SERVER['REQUEST_METHOD'] === 'POST';
}


function input($key, $default = '')
{
    return isset($_POST[$key]) ? $_POST[$key] : $default;
}


function clearSession()
{
    // clear $_SESSION array
    session_unset();

    // delete session data on the server
    session_destroy();

    // ensure client is sent a new session cookie
    session_regenerate_id();

    // start a new session - session_destroy() ended our previous session so
    // if we want to store any new data in $_SESSION we must start a new one
    session_start();
}
