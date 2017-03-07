



/**************** status bar *****************************************/
$(document).ready(function(){

  $progressBarComp = $(".progress-bar-cont");
  if($progressBarComp.length==0){
    return;
  }

  //set default value
  $progressBarComp.on('click','.progress-bar-dot-wrapper',function(){
    $this = $(this);
    var dataLink = $this.data('status-link');
    alert("goes to "+dataLink);

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
});
