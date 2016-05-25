
$( document ).ready(function() {

$("#instructions").hide();
$("#x").hide();
$("#prisondoor").hide();
$(".goldenkey2").hide();
$("#metaldiv").hide();
$("#deadend").hide();

$("#instructionbutton").click(function(){
	$("#startpgtext").hide();
	$("#instructions").show();
	$("#x").show();
}); //end of instructionbutton

$("#x").click(function(){
	$("#startpgtext").show();
	$("#instructions").hide();
	$("#x").hide();
}); //end of "x"

$("#goldenkey").click(function(){
	$("#goldenkey").hide();
	$("#exploreBody").css("background-image", "url(http://img.photobucket.com/albums/v90/subrosa_florens/oblivion/Oblivion348.jpg)");
	$("#prisondoor").show();
	$(".goldenkey2").show();
	$("#metaldiv").show();
$(document).mousemove(function(e) {
    $('.goldenkey2').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});
});//goldenkey end

$("#metaldiv").click(function(){
	$("#metaldiv").hide();
	$("#exploreBody").css("background-image", "url(http://tespostcards.files.wordpress.com/2015/10/castle-dour-prision.jpg)");
	$("#deadend").show();
});//end of metaldiv
$("#deadend").click(function(){
$("#exploreBody").css("background-image", "url(http://preview.turbosquid.com/Preview/2014/05/25__08_44_59/pic%202.jpgdcf7e882-62c2-4f49-b050-36d6bcba174fOriginal.jpg)");
$("#deadend").hide();
});// end of deadend
});//end of function