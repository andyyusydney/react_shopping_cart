/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function($requestObj, $url, $callback,$complete){
    $.ajax({
            url: $url,
            data:JSON.stringify($requestObj),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                $callback(data);
            },
            error: function(data){
                console.log("data error:" + data)
            },
            complete: function(){
                $complete();
            }
        });
}
