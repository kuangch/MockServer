/**
 * Created by Thinkpad on 2017/9/30.
 */
let {Mock} = require(require('app-root-path') + '/utils/data_utils')

let pass_person = {
    'identity': '@id()',
    'name':'@cname()',
    'sex':'@cword("男女")',
    'age|10-60':30,
    'address':'@county(true)',
    'label':'@title(1, 5)',
    'ret_1v1|-1-1':2,
    'ret_1vn|-1-1':2,
    'pass_time':'@datetime()',
    'color_img_path':'https://avatars0.githubusercontent.com/u/8882618?s=460&v=4',
    'ir_img_path':'https://avatars3.githubusercontent.com/u/18045574?s=200&v=4'
};

module.exports = {
    one:function(){
        return Mock.mock(pass_person)
    },

    list:function(){
        return Mock.mock({
            'users|10-80': [
                pass_person
            ]
        })
    }
};
