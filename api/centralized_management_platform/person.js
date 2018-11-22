/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/11/22
 * ======================================== */

let {app,data,getBaseUrl} = require(require('app-root-path') + '/utils/api_utils')
let baseUrl = getBaseUrl(__filename)


app.post(`${baseUrl}/search`,function(req, res){
    res.send(JSON.stringify({
        code:0,
        msg:'OK',
        data: data[`${baseUrl}`].list()
    }));
});