/**
 * Created by kuangch on 2017/10/1.
 */


var app = require('../express_instance');
var data = require(require('app-root-path') + '/mock');

app.get('/user/list',function(req, res){
    res.send(JSON.stringify(data.user.list()));
});

app.get('/user/info',function(req, res){
    res.send(JSON.stringify(data.user.info()));
});