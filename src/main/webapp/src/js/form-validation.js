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

$(document).on('keyup',"[data-ccexpiry-formatter]",function(){
    var $this = $(this);
    var value = $this.val();

    if(!value){
        return;
    }
    var replacedValue = value.replace("-", "");
    var replacedLength = replacedValue.length;
    var newValue;
    if (replacedLength > 1) {
        newValue = replacedValue.slice(0, 2) + "-" + replacedValue.slice(2);
    }
    else {
        newValue = replacedLength;
    }
    $this.val(newValue);
});
