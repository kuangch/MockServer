/**
 * Created by Thinkpad on 2017/9/30.
 */
let {Mock} = require(require('app-root-path') + '/utils/data_utils')

let person = {
    'pid|+1': 0,
    'identity': '@id()',
    'name':'@cname()',
    'sex':'@cword("男女")',
    'color_img_path':'https://avatars0.githubusercontent.com/u/8882618?s=460&v=4',
    'ir_img_path':'https://avatars3.githubusercontent.com/u/18045574?s=200&v=4',
    'id_card_img_path':'http://photocdn.sohu.com/20140220/Img395326738.jpg',
    'label_data|0-5':[
        {
            'lid': '@integer(0, 15)',
            'label': '@cword(3,5)'
        }
    ]
};

module.exports = {
    one:function(){
        return Mock.mock(person)
    },

    list:function(){
        return Mock.mock({
            'users|10-80': [
                person
            ]
        })
    }
};
