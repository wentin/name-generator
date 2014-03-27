$(function(){
	// $('.keys span').click(function (e) {
	//  	$('.keys span').removeClass('keyDown');
	// 	var typedText = $('i', this).text().toLowerCase();
	// 	$('.paper input').val($('.paper input').val() + typedText);
	// })
	$( "input" ).keydown(function(e) {
	 	var keyValue = String.fromCharCode(e.which);
	 	console.log(keyValue);
	 	$('.keys span').removeClass('keyDown');
	 	$('.keys span:contains('+ keyValue +')').addClass('keyDown');
	});

	// $('.paper a').click(function(e){
	// 	e.preventDefault();
	// 	$('.input.view').removeClass('active');
	// 	$('.outcome.view').addClass('active');
	// })
	var $this;
	var listenerOn = false;
	$( "input" ).focus(function(e) {
		e.preventDefault();
		$this = $(this);
		if (!listenerOn) {
		$('.keys span').click(function (e) {
		 	$('.keys span').removeClass('keyDown');
			var typedText = $('i', this).text().toLowerCase();
			$this.val($this.val() + typedText);
		})
		listenerOn = true;

		}
	});
})