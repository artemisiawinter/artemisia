$( document ).ready(function() {

$("#instructions").hide();
$("#x").hide();

$("#instructionbutton").click(function(){
	$("#startpgtext").hide();
	$("#instructions").show();
	$("#x").show();
}); //end of instructionbutton

$("#x").click(function(){
	$("#startpgtext").show();
	$("#instructions").hide();
	$("#x").hide();
})//end of "x"

$("#goldenkey").click(function(){
	$("#goldenkey").hide();
	$("#exploreBody").css("background-image", "url(http://vignette1.wikia.nocookie.net/elderscrolls/images/1/1e/%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.jpg/revision/latest?cb=20120729155649&path-prefix=ru)");
})//goldenkey end
});//end of function