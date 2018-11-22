/**
 * Created by Thinkpad on 2017/9/30.
 */
var rd = require('rd');
var path = require('path');


var modules = [];

let apiDir = __dirname + path.sep +  'api'
let list = rd.readFilterSync(apiDir,/\.js$/)

list.forEach(function (f,index) {
    let name = f.replace(`${apiDir}`,'').replace(/.js$/,'')
    name = name.replace(new RegExp(`\\${path.sep}`,'g'),'/')
    if(name != path.basename(__filename,path.extname(__filename))){

        module = {};
        module.name = name;
        module.path = f;

        modules.push(module);

        console.log('generate api : %s', name);
    }
})

modules.forEach(function (item) {
    exports[item.name] = require(item.path);
});
