/**
 * This javascript is for view my bills in my account
 */



$(document).ready(function(){

    if($('#foxtel-now-bill-history-template-container').length < 1){
        return;
    }

    $("a").on('click',function(e){
        var linkUrl = $(this).data("href");
        linkUrl = $.trim(linkUrl);
        $(location).attr('href',linkUrl);
    })
});
