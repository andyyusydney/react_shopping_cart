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
