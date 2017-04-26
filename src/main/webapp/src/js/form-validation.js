/* Foxtel now form validation */

//Make the first letter uppercase, leave the remaining in lower case
$(document).on('change',"[data-name-formatter]",function(){
    var $this = $(this);
    var value = $this.val();

    if(!value){
        return;
    }

    var newNameString = "";
    //split by space
    var strArrayBySpace = value.split(" ");
    for(var i=0;i<strArrayBySpace.length;i++){
        var tmpStr = strArrayBySpace[i];
        newNameString += tmpStr.charAt(0).toUpperCase() + tmpStr.substr(1).toLowerCase();
        if(i <strArrayBySpace.length-1){
            newNameString+=" ";
        }
    }


    //rest and then split by -

    value = newNameString;
    newNameString = "";

    var strArrayBySpace = value.split("-");
    for(var i=0;i<strArrayBySpace.length;i++){
        var tmpStr = strArrayBySpace[i];
        newNameString += tmpStr.charAt(0).toUpperCase() + tmpStr.substr(1).toLowerCase();
        if(i <strArrayBySpace.length-1){
            newNameString+="-";
        }
    }

    $this.val(newNameString);
});

$(document).on('keyup',"[data-ccexpiry-formatter]",function(e){
    var $this = $(this);
    var value = $this.val();

    if(!value || e.keyCode == 8){
        return;
    }
    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;
    var newValue;
    if (replacedLength > 1) {
        newValue = replacedValue.slice(0, 2) + "-" + replacedValue.slice(2);
    }
    else {
        newValue = replacedValue;
    }
    $this.val(newValue);
});

$(document).on('keyup',"[data-ccnumber-formatter]",function(e){
    if($(this).val().length == 4 && e.keyCode != 8) {
        $(this).val($(this).val()+" ");
    }
    else {
        var str = $(this).val();
        if((str.length - str.lastIndexOf(" "))%5 == 0 && str.length > 4 && e.keyCode != 8){
            $(this).val(str+" ");
        }
    }
});

$(function () {
  $('[data-dob-formatter]').on('keyup', function (event) {
    var value = $(this).val();

    if(!value || event.keyCode === 8){
        return;
    }

    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;
    var newValue;

    // Ensure the format dd-mm-yyyy is maintained.
    if (replacedLength > 1) {
      newValue = replacedValue.slice(0, 2)
        + "-" + replacedValue.slice(2, 4);

      if (replacedLength > 3) {
        newValue += "-" + replacedValue.slice(4);
      }
    } else {
      newValue = replacedValue;
    }
    $(this).val(newValue);
  });

  $('[data-dob-formatter]').on('keydown', function (event) {
    var value = $(this).val();

    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;

    // Do nothing if the key pressed is not a number.
    if (!((event.keyCode >= 48 && event.keyCode <= 57)
      || (event.keyCode >= 96 && event.keyCode <= 105)
      // Allow backspace.
      || event.keyCode === 8
      // Allow tab.
      || event.keyCode === 9)) {
      return false;
    }

    // Do nothing if we've reached the right length.
    if (replacedLength > 7 && event.keyCode !== 8) {
      return false;
    }
  });
});
