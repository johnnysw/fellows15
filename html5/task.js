self.onmessage = function(e){
    // e.data => hello
    //业务逻辑代码
    self.postMessage(e.data + 'world');
}