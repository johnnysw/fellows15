$(function(){
    var $searchIpt = $("#search-ipt");
    $("#search-icon").on("click", function(){
        alert($searchIpt.val());
    });
    $searchIpt.on("keypress", function(e){
        if(e.which == 13){
            alert(this.value);
        }
    });


});