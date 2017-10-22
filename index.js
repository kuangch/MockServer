require('./api');
var app = require('./express_instance');

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址：为 http://%s:%s",host, port)
});