function tooltip(selector){
    $(selector).hover(function(e){
        this.tempTitle = $(this).attr("title") ? $(this).attr("title") : $(this).html();
        $("<div id='tooltip'></div>").html(this.tempTitle).offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).appendTo("body").show("fast");
        $(this).removeAttr("title");
    }, function(){
        $("#tooltip").remove();
        $(this).attr("title", this.tempTitle);
    }).on("mousemove", function(e){
        $("#tooltip").offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
    });
}