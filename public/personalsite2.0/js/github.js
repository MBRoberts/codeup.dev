$(document).ready(function() { 
	"use strict";

	// sorts through all of your repos calling only on the info requested in var
	function gitInfo(repository) {
		var repo = repository.clone_url;
		var name = repository.name;
		var dt = repository.pushed_at;
		var day = new Date(dt);
		var date = day.toDateString();
		// set up like this for easier visibility 
		var info = "<div id='gitInfo' class='text-center'><a href='" 
			+ repo + "' target='_blank'><i class='icon icon-github'></i><div>Project:<br><span>" 
			+ name + "</span></div><div><br>Last pushed on:<br><span>" 
			+ date + "</span></div><hr></div></a>";

		// puts info into the id github-name
		$("#github-name").append(info);
	}

	// first function made, calls on gitInfo for more info. 
	function gitName() {
		$.get("https://api.github.com/users/MBRoberts/repos?access_token=29ab0fe326934834a5a35b6e722ef63681fc0caf").done(function(data) {

			// forEach loop goes to github and finds all repos, must specify if you do not want private repos shown
			data.forEach(function(repository) {
				gitInfo(repository);
			});
		}).fail(function() {
			alert("failed in gitName")
		});
	}

	gitName();
});