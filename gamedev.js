
$( document ).ready(function() {

$("#instructions").hide();
$("#x").hide();
$("#prisondoor").hide();
$(".goldenkey2").hide();

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
	$("#prisondoor").click(function(){
		$("#exploreBody").css("background-image", "url(http://preview.turbosquid.com/Preview/2014/05/25__08_44_59/pic%202.jpgdcf7e882-62c2-4f49-b050-36d6bcba174fOriginal.jpg)");
	});//end of prisondoor click function
	$("#goldenkey").hide();
	$("#exploreBody").css("background-image", "url(http://img.photobucket.com/albums/v90/subrosa_florens/oblivion/Oblivion348.jpg)");
	$("#prisondoor").show();
	$(".goldenkey2").show();
$(document).mousemove(function(e) {
    $('.goldenkey2').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});
})//goldenkey end
});//end of function