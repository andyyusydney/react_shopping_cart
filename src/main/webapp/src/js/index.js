$(document).ready(function(){
  $('span').click(function(){
    if ($(this).hasClass('first')){
        $('#progress-bar').val('0');
        $(this).nextAll().removeClass('border-change');  
        $('.percent').html("0% Complete");
       }else if ($(this).hasClass('second')){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('34');
        $(this).prevAll().addClass('border-change');  
        $(this).addClass('border-change');
         $('.percent').html("33% Complete");
       }else if ($(this).hasClass('third')){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('67');
        $(this).prevAll().addClass('border-change'); 
        $(this).addClass('border-change');
        $('.percent').html("66% Complete");
       } else{
        $('#progress-bar').val('100');
         $(this).addClass('border-change');
        $(this).prevAll().addClass('border-change');
         $('.percent').html("100% Complete");
       }
  });
});// complete click