/**
 * This javascript is for view my bills in my account
 */



$(document).ready(function(){

    if($('#foxtel-now-bill-history-template-container').length < 1){
        return;
    }

    $(".foxtel-now-view-my-bills-container").on('click','a',function(e){
        e.preventDefault();
        var linkUrl = $(this).data("href");
        linkUrl = $.trim(linkUrl);
        window.open(linkUrl,'_blank');
        return false;
    })
});
