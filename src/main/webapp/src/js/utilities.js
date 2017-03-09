/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function(requestObj,url,callback){
    $.ajax({
            url: url,
            data:JSON.stringify(requestObj),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                callback(data);
            }
        });
}