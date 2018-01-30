$(document).on("click", function(e){
    if($(e.target).is("#edited")){
        $("#photosEdited").show();
        $("#photosEditedSec").show();
    }else{
        $("#photosEdited").hide();
    }
});
$(document).on("click", function(e){
    if($(e.target).is("#unEdited")){
        $("#photosUnedited").show();
    }else{
        $("#photosUnedited").hide();
    }
});