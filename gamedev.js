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
	$("#exploreBody").hide();
	$("#background3").show();
})//goldenkey end
});//end of function