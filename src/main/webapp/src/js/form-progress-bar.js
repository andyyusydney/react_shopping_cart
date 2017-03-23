/* Foxtel now progress bar */



/**************** status bar *****************************************/
$(document).ready(function(){

  $progressBarComp = $(".foxtel-now-progress-bar-cont");
  if($progressBarComp.length==0){
    return;
  }

  // //set default value
  // $progressBarComp.on('click','.foxtel-now-progress-bar-dot-wrapper',function(){
  //   $this = $(this);
  //   var dataLink = $this.data('status-link');

  //   if ($(this).hasClass('first')){

  //       $('#progress-bar').val('0');
  //       $(this).nextAll().removeClass('border-change');
  //      }else if ($(this).hasClass('second')){
  //       $(this).nextAll().removeClass('border-change');  
  //       $('#progress-bar').val('34');
  //       $(this).prevAll().addClass('border-change');  
  //       $(this).addClass('border-change');
  //      }else if ($(this).hasClass('third')){
  //       $(this).nextAll().removeClass('border-change');  
  //       $('#progress-bar').val('67');
  //       $(this).prevAll().addClass('border-change'); 
  //       $(this).addClass('border-change');
  //      } else{
  //        $('#progress-bar').val('100');
  //        $(this).addClass('border-change');
  //       $(this).prevAll().addClass('border-change');

  //      }
  // });

  //detect data-default-step and set status value when page load
  var dataDefaultStep = $progressBarComp.attr('data-default-step');

  if(typeof dataDefaultStep != 'undefined' && dataDefaultStep != null && dataDefaultStep != ''){console.log(dataDefaultStep);

    switch(dataDefaultStep) {
      case '1':
        $('#progress-bar').val('0');
        $progressBarComp.find('div.first').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '2':
        $('#progress-bar').val('34');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '3':
        $('#progress-bar').val('67');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change');
        $progressBarComp.find('div.third').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '4':
        $('#progress-bar').val('100');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change');
        $progressBarComp.find('div.third').addClass('border-change');
        $progressBarComp.find('div.fourth').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      default:
        $('#progress-bar').val('34');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;  
    }
  }else{
    $('#progress-bar').val('34');
    $progressBarComp.find('div.first').addClass('border-change');
    $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
  }
});
