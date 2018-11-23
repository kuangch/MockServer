let app = require('./express_instance');
let request_handler = require('./middleware/request_handler');
let bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(request_handler.RequestShow)
app.use(request_handler.ApplicationJsonShow)

require('./api');

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址：为 http://%s:%s",host, port)
});