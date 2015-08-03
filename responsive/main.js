$(document).ready(function() {
	$(".buttons").children().hide();

	$("#hem").click(function() {
		$(".buttons").children().hide();
		$(".rss").show();
		$("#main").css("background", "#626262")
	});

	$("#wow").click(function() {
		$(".buttons").children().hide();
		$(".rss").hide();
		$(".wow").toggle();
		$("#main").css('background-image', 'url(' + "http://i.imgur.com/Axr5cTs.jpg" + ')');
	});
	
	$("#poe").click(function() {
		$(".buttons").children().hide();
		$(".rss").hide();
		$(".poe").toggle();
		$("#main").css('background-image', 'url(' + "http://i.imgur.com/rIFaDck.jpg" + ')');
	});

	$("#d3").click(function() {
		$(".buttons").children().hide();
		$(".rss").hide();
		$(".d3").toggle();
		$("#main").css('background-image', 'url(' + "http://i.imgur.com/gxJdMfC.jpg" + ')');
	});


});