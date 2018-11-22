/**
 * Created by Thinkpad on 2017/9/30.
 */
let {Mock} = require(require('app-root-path') + '/utils/data_utils')

let label = {
    'lid|+1': 0,
    'label':'@cword(3,5)',
    'flag':function () {
        return Math.round(Math.random()) + ""
    },
    'remark':'@csentence()',
    'relation_flag|0-1':2,
    'change_type|-1-1':2,
};

module.exports = {
    one:function(){
        return Mock.mock(label)
    },

    list:function(){
        return Mock.mock({
            'users|8-15': [
                label
            ]
        })
    }
};
