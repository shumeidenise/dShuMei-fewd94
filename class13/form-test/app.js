$(document).ready(function () {
	$('#myForm').submit(function(e){
		var the_input = $('#name-input').val();
		$('#target').html(the_input);
		e.preventDefault();
	})
})
