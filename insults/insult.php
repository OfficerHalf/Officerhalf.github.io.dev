<?php
	$command = escapeshellcmd('/insult.py');
	$output = shell_exec(&command);
	echo $output;
?>