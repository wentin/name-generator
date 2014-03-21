$(function(){
	$('.keys span').click(function (e) {
	 	$('.keys span').removeClass('keyDown');
		var typedText = $('i', this).text().toLowerCase();
		$('.paper input').val($('.paper input').val() + typedText);
	})
	/*$(".input .paper h3").typed({
        strings: ["Create Your Own Victorian Pen Name"],
        typeSpeed: 30
      });*/
	$( "input" ).keydown(function(e) {
	 	var keyValue = String.fromCharCode(e.which);
	 	console.log(keyValue);
	 	$('.keys span').removeClass('keyDown');
	 	$('.keys span:contains('+ keyValue +')').addClass('keyDown');
	});
})