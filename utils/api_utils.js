/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/11/22
 * ======================================== */

let rootPath = require('app-root-path')
let app = require(rootPath + '/express_instance');
let data = require(rootPath + '/mock');
let path = require('path')

let getBaseUrl = function (__filename) {
    return  __filename
        .replace(`${rootPath}${path.sep}api`,'')
        .replace(new RegExp(`\\${path.sep}`, 'g'), '/')
        .replace(/.js$/,'')
}

module.exports = {
    app,
    data,
    getBaseUrl
}