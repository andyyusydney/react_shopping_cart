/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function($requestObj, $url, $callback,$complete){
    $.ajax({
            url: $url,
            data:$requestObj || JSON.stringify($requestObj),
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
                if (typeof $complete === 'function') {
                  $complete();
                }
            }
        });
};

Utilities.registerJqueryExtensions = function () {
  (function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
  })(jQuery);
};
Utilities.registerJqueryExtensions();

module.exports =  Utilities;
