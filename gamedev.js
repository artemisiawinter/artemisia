$( document ).ready(function() {

$("#instructions").hide();

$("#instructionbutton").click(function(){
	$("#startpgtext").hide();
	$("#instructions").show();
}); //end of instructionbutton

$("#x").click(function(){
	$("#startpgtext").show();
	$("#instructions").hide();
})
});//end of function