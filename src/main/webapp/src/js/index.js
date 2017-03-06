$(document).ready(function(){
  $('div').on('click','.progress-bar-dot-wrapper',function(){
    if ($(this).hasClass('first')){
        $('#progress-bar').val('0');
        $(this).nextAll().removeClass('border-change');  
       }else if ($(this).hasClass('second')){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('34');
        $(this).prevAll().addClass('border-change');  
        $(this).addClass('border-change');
       }else if ($(this).hasClass('third')){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('67');
        $(this).prevAll().addClass('border-change'); 
        $(this).addClass('border-change');
       } else{
        $('#progress-bar').val('100');
         $(this).addClass('border-change');
        $(this).prevAll().addClass('border-change');
       }
  });
});// complete click