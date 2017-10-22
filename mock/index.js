/**
 * Created by Thinkpad on 2017/9/30.
 */
var rd = require('rd');
var path = require('path');


var modules = [];

rd.eachSync(__dirname + '/data', function (f, s) {

    // 每找到一个文件都会调用一次此函数
    // 参数s是通过 fs.stat() 获取到的文件属性值

    if (path.extname(f) == '.js'){
        var name = path.basename(f, path.extname(f));
        x = path.basename(__filename);
        if(name != path.basename(__filename,path.extname(__filename))){

            module = {};
            module.name = name;
            module.path = f;

            modules.push(module);

            console.log('load mock data : %s', name);
        }

    }


});

modules.forEach(function (item) {
    exports[item.name] = require(item.path);
});
