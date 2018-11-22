/**
 * Created by Thinkpad on 2017/9/30.
 */
let {Mock} = require(require('app-root-path') + '/utils/data_utils')

let user_info = {
    'id': '@id()',
    'name':'@cname()',
    'sex':'@cword("男女")',
    'age|10-60':30,
    'address':'@county(true)',
    'phone':/\d{13}/,
    'email':'@email()'
};

module.exports = {
    info:function(){
        return Mock.mock(user_info)
    },

    list:function(){
        return Mock.mock({
            'users|10-20': [
                user_info
            ]
        })
    }
};
