/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function($requestObj, $url, $callback,$complete){
    return $.ajax({
            url: $url,
            data:$requestObj || JSON.stringify($requestObj),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                if(typeof $callback == 'function') $callback(data);
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

Utilities.timeConverter = function (UNIX_timestamp,hrs_flag){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  if(hrs_flag){
    var time = date + ' ' + month + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
  } else {
    var time = date + ' ' + month + ', ' + year;
  }

  return time;
}

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

Utilities.selectDropDownText = function () {

    (function($){
        $(".dropdown-menu").on('click touchend', '.dropdown-item', function(e){
                var $btnElem = $(this).parents(".dropdown").find('.btn');
                $btnElem.find('span').text($(this).text());
                $btnElem.attr('data-text',$(this).text());
                $btnElem.attr('data-code',$(this).attr('value'));
                $btnElem.val($(this).attr('value'));
        })
    })(jQuery)
}
