/**
 * Created by kuangch on 2017/10/1.
 */
let {app,data,getBaseUrl} = require(require('app-root-path') + '/utils/api_utils')
let baseUrl = getBaseUrl(__filename)


app.get(`${baseUrl}/list`,function(req, res){
    res.send(JSON.stringify(data[`${baseUrl}`].list()));
});

app.get(`${baseUrl}/info`,function(req, res){
    res.send(JSON.stringify(data[`${baseUrl}`].info()));
});

app.post(`${baseUrl}/login`,function(req, res){
    res.send(JSON.stringify({
        code:0,
        msg: 'OK'
    }));
});

app.post(`${baseUrl}/update`,function(req, res){
    res.send(JSON.stringify({
        code:0,
        msg: 'OK'
    }));
});