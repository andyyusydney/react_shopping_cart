/* Jumbotron shopping cart related JS*/

$(document).ready(function(){
	if($('.foxtel-jumbotron--shopping-cart').find('.foxtel-jumbotron__pack-tag')){
		$('.foxtel-jumbotron__pack-tag').on('click',function(){
			$(this).remove();
		})
	}
})