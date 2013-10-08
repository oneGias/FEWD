$(function() {
	if(typeof(localStorage) === 'undefined') {
		alert('You are dead to me.');
	} else {
		var faveColor = localStorage.getItem('faveColor');
		$('body').css('background', faveColor);
		$('#color').html(faveColor);
		$('#btn').on('click', changeColor);
	}
});

function changeColor() {
	var response = $('#colors_string').val();
	$('body').css('background',response);
	$('#color').html(response);
	localStorage.setItem('faveColor', response);
}





