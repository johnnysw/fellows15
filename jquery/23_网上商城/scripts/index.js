$(function(){
    //搜索框
    $("#inputSearch").on("focus", function(){
        if(this.value == this.defaultValue){
            this.value = "";
        }
    }).on("blur", function(){
        if(this.value == ""){
            this.value = this.defaultValue;
        }
    });

    //导航菜单
    $("#nav li").hover(function(){
        $(this).children(".jnNav").show();
    }, function(){
        $(this).children(".jnNav").hide();
    });

    //hot
    $("#jnCatalog .promoted").append("<span class='hot'></span>");

    //轮播图
    //调整图片的层级关系:z-index
   /* $("#JS_imgWrap img").each(function(index, elem){
        $(elem).css({
            zIndex: 5 - index
        });
    });*/
    $("#jnImageroll div a").on("mouseover", function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#JS_imgWrap img").eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    });

    //tooltip
    tooltip("#jnNoticeInfo .tooltip");
    tooltip("#jnCatalog a");

    //轮播图
    $("#jnBrandTab li").on("click", function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").stop().animate({
            left: -$("#jnBrandList li").innerWidth() * 4 * $(this).index()
        }, 1000);
    });



});