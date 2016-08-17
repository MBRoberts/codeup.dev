'use strict';

$(document).ready(function(){

	$.ajax("/data/blog.json").done(function(posts) {
		
		var content;
		
		posts.forEach(function(post, index) {
			
			content = "<div class='container'><span class='date'><em>" + post.date + "</em></span>";
			content += "<h2>" + post.title + "</h2>";
			content += "<i>    Tags: " + post.categories.join(', ') + "</i><br>";
			content += "<a>Read More</a>";
			content += "<p class='paragraph'>" + post.content + "</p></div>";
			$('#posts').append(content);
			$('p').hide();

		});

		$('a').click(function(e) {
			var $parent = $(this).parent();
			
			$($parent).animate({
				width: "90%"
			},1000);

			$(this).next().slideToggle();

		});


	}).fail(function() {

		console.log("Something's wrong");

	});
});