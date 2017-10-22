/**
 * Created by Thinkpad on 2017/9/30.
 */

var Mock = require('../mock');

var device_info = {
    'device_id': '@guid',
    'last_login':'@now'
};

module.exports = {
    info:function(){
        return Mock.mock(device_info)
    }
};