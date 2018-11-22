/**
 * Created by Thinkpad on 2017/9/30.
 */
var rd = require('rd');
var path = require('path');
let rootPath = require('app-root-path')

var modules = [];

let dataDir = rootPath + path.sep + 'data'

let list = rd.readFilterSync(dataDir,/\.js$/)
list.forEach(function (f,index) {
    let name = f.replace(`${dataDir}`,'').replace(/.js$/,'')
    name = name.replace(new RegExp(`\\${path.sep}`,'g'),'/')
    if(name != path.basename(__filename,path.extname(__filename))){

        module = {};
        module.name = name;
        module.path = f;

        modules.push(module);

        console.log('load mock data : %s', name);
    }
})

modules.forEach(function (item) {
    exports[item.name] = require(item.path);
});
