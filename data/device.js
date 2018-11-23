/**
 * Created by Thinkpad on 2017/9/30.
 */
let {Mock} = require(require('app-root-path') + '/utils/data_utils')

let device_info = {
    'device_id': '@guid',
    'last_login':'@now',
    'test':1
};

module.exports = {
    info:function(){
        return Mock.mock(device_info)
    }
};