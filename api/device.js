/**
 * Created by kuangch on 2017/10/1.
 */


var app = require('../express_instance');
var data = require(require('app-root-path') + '/mock');

app.get('/device/info',function(req, res){
    res.send(JSON.stringify(data.device.info()));
});
