<?php

/***********************
* Writes to a log file *
************************/

class Log
{
	public $filename;
	public $handle;
	public function __construct($prefix = 'log') 
	{
		$this->filename = "../logs/{$prefix}-" . date('Y-n-d') . ".log";
		$this->handle = fopen($this->filename, 'a');

	}
	public function __destruct()
	{
		fclose($this->handle);
	}
	public function logMessage($level, $msg)
	{
		fwrite($this->handle, date('Y-n-d h:i:s A ') . "[{$level}] " . $msg . PHP_EOL . PHP_EOL);
	}
	public function info($msg)
	{
		$this->logMessage("INFO", $msg);
	}
	public function error($msg)
	{
		$this->logMessage("ERROR", $msg);
	}
}

