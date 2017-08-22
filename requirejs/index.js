//requirejs AMD
define(["sort"], function(sort){
    var arr = [4, 2, 1, 6, 7];
    // var arr = "asdfasf";
    console.log(sort(arr));
});


//seajs  CMD
/*define(function(require){
    var arr = [4, 2, 1, 6, 7];
    var sort = require("sort");
    console.log(sort(arr));
});*/
