/* Foxtel now shop */

$(document).ready(function(){
	if($('.foxtel-now-album')){
		$foxtel-now-album = $('.foxtel-now-album');
		$foxtel-now-album.find('.foxtel-now-btn.enable').on('click',function(){
			$(this).addClass('hidden');
			$(this).siblings('.foxtel-now-btn.disabled').removeClass('hidden');
		})
		$foxtel-now-album.find('.foxtel-now-btn').on('click',function(e){
			e.stopImmediatePropagation();
            e.preventDefault();
            return false;
		})
	}
	
})